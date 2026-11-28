import Image from "next/image";
import { images } from "../../content/images";
import type { PhotoName, ProcessedImage } from "../../content/images";
import styles from "./photo-image.module.scss";

function getPhoto(
  name: PhotoName
): ProcessedImage & { altText: string; src: string } {
  const photo = images[name];

  if (!photo) {
    throw new Error(`Missing processed ${name} image in the image manifest.`);
  }

  if (photo.alt.isTodo || !photo.alt.value) {
    throw new Error(`Missing alt text for the processed ${name} image.`);
  }

  const source = photo.sources.webp[photo.sources.webp.length - 1];

  if (!source) {
    throw new Error(`Missing WebP source for the processed ${name} image.`);
  }

  return { ...photo, altText: photo.alt.value, src: source.src };
}

export default function PhotoImage({
  name,
  priority = false,
  sizes,
  className
}: {
  name: PhotoName;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  const photo = getPhoto(name);

  return (
    <Image
      className={`${styles.photo} ${className ?? ""}`}
      src={photo.src}
      alt={photo.altText}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={photo.blurDataURL}
    />
  );
}

export { styles as photoImageStyles };
