const sharp = require('sharp');
const fs = require('fs');

const sizes = [16, 32, 192, 512];

async function generateFavicons() {
  const svgBuffer = fs.readFileSync('images/favicon.svg');
  
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(`images/favicon-${size}x${size}.png`);
  }
  
  // Generate apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile('images/apple-touch-icon.png');
}

generateFavicons().catch(console.error); 