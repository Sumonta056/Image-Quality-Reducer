const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "assets/input";
const outputFolder = "assets/output";

fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error("Error reading input folder:", err);
  } else {
    files.forEach((file) => {
      const inputFile = path.join(inputFolder, file);
      const outputFile = path.join(outputFolder, file.replace(".png", ".jpg"));

      fs.access(inputFile, fs.constants.F_OK, (err) => {
        if (err) {
          console.error("Input file does not exist:", err);
        } else {
          sharp(inputFile)
            .jpeg({ quality: 40 }) // Reduce quality to 50%
            .toFile(outputFile, (err, info) => {
              if (err) {
                console.error(
                  "Error occurred while reducing the quality of the image:",
                  err
                );
              } else {
                console.log("Image quality reduced successfully:", info);
              }
            });
        }
      });
    });
  }
});
