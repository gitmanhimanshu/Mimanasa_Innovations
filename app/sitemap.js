const SITE = "https://launch.mimanasa.online";

export default function sitemap() {
  const now = new Date();
  const sections = ["", "#products", "#solutions", "#technology", "#case-studies", "#careers", "#contact"];
  return sections.map((s) => ({
    url: `${SITE}/${s}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: s === "" ? 1 : 0.7,
  }));
}
