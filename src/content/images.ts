import type { ContentValue } from "./types";

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

export const images = {
  "hero": {
    "width": 1920,
    "height": 2560,
    "alt": {
      "value": "Priyanshu Raj, portrait",
      "isTodo": false
    },
    "sources": {
      "avif": [
        {
          "src": "/images/hero-480.avif",
          "width": 480
        },
        {
          "src": "/images/hero-960.avif",
          "width": 960
        },
        {
          "src": "/images/hero-1440.avif",
          "width": 1440
        },
        {
          "src": "/images/hero-1920.avif",
          "width": 1920
        }
      ],
      "webp": [
        {
          "src": "/images/hero-480.webp",
          "width": 480
        },
        {
          "src": "/images/hero-960.webp",
          "width": 960
        },
        {
          "src": "/images/hero-1440.webp",
          "width": 1440
        },
        {
          "src": "/images/hero-1920.webp",
          "width": 1920
        }
      ]
    },
    "blurDataURL": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAABwBACdASoYACAAPxF8tFIsPKUisBgIA5AiCWUAygAMS5yKEnFFNofRkJIh0AD+ryA9l++u9iOurnH0M+VIw4IXfjnAdflWF3f3xjehagvjAsNAKeAAAAAA"
  },
  "about": {
    "width": 1920,
    "height": 2560,
    "alt": {
      "value": "Priyanshu Raj, portrait",
      "isTodo": false
    },
    "sources": {
      "avif": [
        {
          "src": "/images/about-480.avif",
          "width": 480
        },
        {
          "src": "/images/about-960.avif",
          "width": 960
        },
        {
          "src": "/images/about-1440.avif",
          "width": 1440
        },
        {
          "src": "/images/about-1920.avif",
          "width": 1920
        }
      ],
      "webp": [
        {
          "src": "/images/about-480.webp",
          "width": 480
        },
        {
          "src": "/images/about-960.webp",
          "width": 960
        },
        {
          "src": "/images/about-1440.webp",
          "width": 1440
        },
        {
          "src": "/images/about-1920.webp",
          "width": 1920
        }
      ]
    },
    "blurDataURL": "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAwBACdASoYACAAPxGCu1IsKacisAgBgCIJZwC7AC0Hceew8CMpXXF78kIA/uTmCnZTEzAJivFYcrykI8dW5P8e72j0001k+sX3Hvi2WAAAAA=="
  },
  "contact": {
    "width": 1920,
    "height": 2560,
    "alt": {
      "value": "Priyanshu Raj, portrait",
      "isTodo": false
    },
    "sources": {
      "avif": [
        {
          "src": "/images/contact-480.avif",
          "width": 480
        },
        {
          "src": "/images/contact-960.avif",
          "width": 960
        },
        {
          "src": "/images/contact-1440.avif",
          "width": 1440
        },
        {
          "src": "/images/contact-1920.avif",
          "width": 1920
        }
      ],
      "webp": [
        {
          "src": "/images/contact-480.webp",
          "width": 480
        },
        {
          "src": "/images/contact-960.webp",
          "width": 960
        },
        {
          "src": "/images/contact-1440.webp",
          "width": 1440
        },
        {
          "src": "/images/contact-1920.webp",
          "width": 1920
        }
      ]
    },
    "blurDataURL": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADwBACdASoYACAAPvVoqlAqpiQit+gBUB6JZQDLLCZ+8ltMuOdw3TxD1kja3vazXgAA/oz0YUqXmSXgW7WF3SECnknhbRYqKpUiS2pN8deZDJwef8LdoAAA"
  }
} satisfies Partial<Record<PhotoName, ProcessedImage>>;
