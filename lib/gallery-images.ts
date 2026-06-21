import fs from "fs"
import path from "path"

export function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public", "images", "gallery")
  const files = fs.readdirSync(dir).filter((f) => /\.(webp|jpe?g|png)$/i.test(f))
  files.sort()
  return files.map((f) => `/images/gallery/${f}`)
}
