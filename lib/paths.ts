const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function getImagePath(imagePath: string): string {
  if (!basePath) return imagePath;
  // Avoid double prefixing
  if (imagePath.startsWith(basePath)) return imagePath;
  return `${basePath}${imagePath}`;
}
