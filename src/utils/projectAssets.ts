export function resolveProjectImageSrc(_projectId: string, src: string): string {
  const s = src.trim();
  if (!s) return s;

  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith("/")) return s;

  return `/${s}`;
}

export function resolveProjectLink(url: string): string {
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export function formatProjectUrlLabel(url: string): string {
  return url.trim().replace(/^https?:\/\//i, "").replace(/\/$/, "");
}

