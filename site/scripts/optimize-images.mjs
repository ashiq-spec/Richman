/**
 * One-shot image optimizer for /public/images.
 * - Converts storefront.png → storefront.jpg (removes the heavy PNG)
 * - Recompresses every JPEG with mozjpeg at sensible max widths
 * Run: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { readdir, stat, unlink, rename } from "node:fs/promises";
import path from "node:path";

const DIR = path.resolve(process.cwd(), "public/images");

// Per-file max display width (2x retina of rendered size)
const WIDTHS = {
  "hero-groom.jpg": 2000,
  "storefront.jpg": 1600,
  "og-image.jpg": 1200,
};
const DEFAULT_WIDTH = 1400;
const QUALITY = 74;

async function optimizeJpeg(file) {
  const full = path.join(DIR, file);
  const before = (await stat(full)).size;
  const width = WIDTHS[file] ?? DEFAULT_WIDTH;
  const tmp = full + ".tmp";
  await sharp(full)
    .rotate() // respect EXIF orientation
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toFile(tmp);
  const after = (await stat(tmp)).size;
  if (after < before) {
    await unlink(full);
    await rename(tmp, full);
    console.log(
      `${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`,
    );
  } else {
    await unlink(tmp);
    console.log(`${file}: kept original (${(before / 1024).toFixed(0)}KB)`);
  }
}

// 1) storefront.png → storefront.jpg
try {
  const png = path.join(DIR, "storefront.png");
  await stat(png);
  await sharp(png)
    .resize({ width: WIDTHS["storefront.jpg"], withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toFile(path.join(DIR, "storefront.jpg"));
  await unlink(png);
  console.log("storefront.png → storefront.jpg");
} catch {
  // already converted on a previous run
}

// 2) recompress all jpegs
for (const file of await readdir(DIR)) {
  if (file.endsWith(".jpg")) await optimizeJpeg(file);
}
console.log("done");
