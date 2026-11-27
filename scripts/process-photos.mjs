import { readdir, mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const sourceDirectory = path.join(projectDirectory, "source-photos");
const outputDirectory = path.join(projectDirectory, "public", "images");
const manifestPath = path.join(
  projectDirectory,
  "src",
  "content",
  "images.ts",
);
const photoNames = ["hero", "about", "contact"];
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
if (sharp.format.heif.input.file) {
  supportedExtensions.add(".heic");
}
const responsiveWidths = [480, 960, 1440, 1920];
const outputFormats = [
  {
    extension: "avif",
    encode: (pipeline) => pipeline.avif({ quality: 55, effort: 5 }),
  },
  {
    extension: "webp",
    encode: (pipeline) => pipeline.webp({ quality: 78, effort: 5 }),
  },
];

const sourceFiles = await readdir(sourceDirectory, { withFileTypes: true });
const photos = new Map();

for (const entry of sourceFiles) {
  if (!entry.isFile()) {
    continue;
  }

  const extension = path.extname(entry.name).toLowerCase();
  const baseName = path.basename(entry.name, path.extname(entry.name)).toLowerCase();

  if (!photoNames.includes(baseName) || !supportedExtensions.has(extension)) {
    continue;
  }

  if (photos.has(baseName)) {
    throw new Error(
      `Multiple source images found for "${baseName}"; keep only one supported image per name.`,
    );
  }

  photos.set(baseName, path.join(sourceDirectory, entry.name));
}

await mkdir(outputDirectory, { recursive: true });

const manifestEntries = [];
const outputFiles = [];

for (const name of photoNames) {
  const sourcePath = photos.get(name);

  if (!sourcePath) {
    console.log(`Skipping ${name}: no matching source image found.`);
    continue;
  }

  const sourceMetadata = await sharp(sourcePath).metadata();

  if (!sourceMetadata.width || !sourceMetadata.height) {
    throw new Error(`Could not determine image dimensions for ${sourcePath}`);
  }

  const swapsDimensions = [5, 6, 7, 8].includes(sourceMetadata.orientation);
  const orientedWidth = swapsDimensions
    ? sourceMetadata.height
    : sourceMetadata.width;
  const orientedHeight = swapsDimensions
    ? sourceMetadata.width
    : sourceMetadata.height;
  const isHero = name === "hero";
  const maxOutputWidth = isHero
    ? Math.min(orientedWidth, Math.floor((orientedHeight * 3) / 4))
    : orientedWidth;
  const widths = [
    ...new Set(
      responsiveWidths
        .map((width) => Math.min(width, maxOutputWidth))
        .filter((width) => width > 0),
    ),
  ];
  const variants = { avif: [], webp: [] };
  let manifestWidth = 0;
  let manifestHeight = 0;

  for (const width of widths) {
    const height = isHero
      ? Math.floor((width * 4) / 3)
      : Math.round((width * orientedHeight) / orientedWidth);
    const image = sharp(sourcePath).rotate();

    if (isHero) {
      image.resize({
        width,
        height,
        fit: "cover",
        position: sharp.strategy.attention,
        withoutEnlargement: true,
      });
    } else {
      image.resize({ width, withoutEnlargement: true });
    }

    for (const format of outputFormats) {
      const outputPath = path.join(
        outputDirectory,
        `${name}-${width}.${format.extension}`,
      );

      await format.encode(image.clone()).toFile(outputPath);

      const outputStat = await stat(outputPath);
      variants[format.extension].push({
        src: `/images/${name}-${width}.${format.extension}`,
        width,
      });
      outputFiles.push({
        path: path.relative(projectDirectory, outputPath),
        bytes: outputStat.size,
      });

      if (width >= manifestWidth) {
        manifestWidth = width;
        const outputMetadata = await sharp(outputPath).metadata();
        manifestHeight = outputMetadata.height;
      }
    }
  }

  const placeholderWidth = Math.min(24, maxOutputWidth);
  const placeholderHeight = isHero
    ? Math.floor((placeholderWidth * 4) / 3)
    : Math.max(
        1,
        Math.round((placeholderWidth * orientedHeight) / orientedWidth),
      );
  const placeholder = await sharp(sourcePath)
    .rotate()
    .resize({
      width: placeholderWidth,
      height: placeholderHeight,
      fit: isHero ? "cover" : "inside",
      position: sharp.strategy.attention,
      withoutEnlargement: true,
    })
    .blur(4)
    .webp({ quality: 30, effort: 5 })
    .toBuffer();

  manifestEntries.push({
    name,
    width: manifestWidth,
    height: manifestHeight,
    alt: {
      value: "Priyanshu Raj, portrait",
      isTodo: false,
    },
    sources: variants,
    blurDataURL: `data:image/webp;base64,${placeholder.toString("base64")}`,
  });
}

const manifest = `import type { ContentValue } from "./types";

export type PhotoName = "hero" | "about" | "contact";

export type ResponsiveImageSource = {
  src: string;
  width: number;
};

export type ProcessedImage = {
  width: number;
  height: number;
  alt: ContentValue<string>;
  sources: {
    avif: ResponsiveImageSource[];
    webp: ResponsiveImageSource[];
  };
  blurDataURL: string;
};

export const images = ${JSON.stringify(
  Object.fromEntries(
    manifestEntries.map(({ name, ...image }) => [name, image]),
  ),
  null,
  2,
)} satisfies Partial<Record<PhotoName, ProcessedImage>>;
`;

await writeFile(manifestPath, manifest, "utf8");

for (const output of outputFiles) {
  console.log(`${output.path} ${output.bytes} bytes`);
}

console.log(`Wrote ${path.relative(projectDirectory, manifestPath)}`);
