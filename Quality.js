const sharp = require('sharp');
const fs = require('fs');

const inputFile = 'assets/Project3.png';
const outputFile = 'assets/project3.jpg';

fs.access(inputFile, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('Input file does not exist:', err);
  } else {
    sharp(inputFile)
      .jpeg({ quality: 50 }) // Reduce quality to 50%
      .toFile(outputFile, (err, info) => {
        if (err) {
          console.error('Error occurred while reducing the quality of the image:', err);
        } else {
          console.log('Image quality reduced successfully:', info);
        }
      });
  }
});