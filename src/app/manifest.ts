import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio",
    short_name: "Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#15130F",
    theme_color: "#D9482B"
  };
}
