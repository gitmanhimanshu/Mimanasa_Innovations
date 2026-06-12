export default function manifest() {
  return {
    name: "Mimanasa Innovations",
    short_name: "Mimanasa",
    description: "AI-driven software, school management systems, learning platforms and business automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#2563eb",
    icons: [
      { src: "/logo.png", sizes: "any", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
