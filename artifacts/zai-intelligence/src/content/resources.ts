export type { Article } from "./articles";
export type { Guide } from "./guides";
export { ARTICLES } from "./articles";
export { GUIDES } from "./guides";

import { ARTICLES, type Article } from "./articles";
import { GUIDES, type Guide } from "./guides";

export type Resource = (Article | Guide) & { resourceType: "article" | "guide" };

export const RESOURCES: Resource[] = [
  ...ARTICLES.map((a) => ({ ...a, resourceType: "article" as const })),
  ...GUIDES.map((g) => ({ ...g, resourceType: "guide" as const })),
];

export function getResourceContent(resource: Resource, lang: "en" | "ar") {
  return resource[lang];
}
