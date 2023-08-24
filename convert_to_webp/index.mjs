import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Set input and output directories
const inputDir = './images';
const outputDir = './build';

// Create the output directory if it does not exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Get a list of .jpg files in the input directory
const files = fs.readdirSync(inputDir).filter(file => path.extname(file) === '.jpg');

// Loop through each file and convert it to .webp
files.forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
  sharp(inputPath)
    .webp({ quality: 80 }) // You can set the quality level here
    .toFile(outputPath, (err, info) => {
      if (err) throw err;
      console.log(`${inputPath} converted to ${outputPath}`);
    });
});
