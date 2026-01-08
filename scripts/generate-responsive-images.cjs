const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const ASSETS_DIR = path.join(ROOT, "src", "assets");
const OUTPUT_WIDTHS = [320, 480, 640];
const QUALITY = 50;

const sources = [
  "photo_apex.avif",
  "photo_astro.avif",
  "photo_arc.avif",
  "photo_castelion.avif",
];

async function generateVariants() {
  for (const file of sources) {
    const inputPath = path.join(ASSETS_DIR, file);
    const baseName = file.replace(/\.avif$/i, "");

    for (const width of OUTPUT_WIDTHS) {
      const outputPath = path.join(ASSETS_DIR, `${baseName}-${width}.avif`);

      await sharp(inputPath)
        .resize({ width })
        .avif({ quality: QUALITY, effort: 4 })
        .toFile(outputPath);
    }
  }
}

generateVariants()
  .then(() => {
    console.log("Responsive images generated.");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
