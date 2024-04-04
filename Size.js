const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = 'assets/input';
const outputFolder = 'assets/output';

fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error('Error reading input folder:', err);
  } else {
    files.forEach(file => {
      const inputFile = path.join(inputFolder, file);
      const outputFile = path.join(outputFolder, file.replace(path.extname(file), '.jpg'));

      fs.access(inputFile, fs.constants.F_OK, (err) => {
        if (err) {
          console.error('Input file does not exist:', err);
        } else {
          sharp(inputFile)
            .resize(500) // Reduce the width to 500 pixels
            .jpeg({ quality: 50 }) // Reduce quality to 50%
            .toFile(outputFile, (err, info) => {
              if (err) {
                console.error('Error occurred while reducing the size and quality of the image:', err);
              } else {
                console.log('Image size and quality reduced successfully:', info);
              }
            });
        }
      });
    });
  }
});