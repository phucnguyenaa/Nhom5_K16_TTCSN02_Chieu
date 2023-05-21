const fs = require("fs");
const path = require("path");
const unzipper = require("unzipper");
const docxPath = path.join(__dirname, "/dulieu.docx");
fs.createReadStream(docxPath)
  .pipe(unzipper.Parse())
  .on("entry", function (entry) {
    const fileName = entry.path;
    // if (fileName.includes('word/document.xml'))
    if (true) {
      entry.pipe(fs.createWriteStream("document.txt"));
    } else {
      entry.autodrain();
    }
  })
  .on("finish", function () {
    console.log("Contents extracted to document.xml");
  });
// const fs = require("fs");
// fs.readFile("./file.txt", (err, data) => {
//   fs.writeFile("./fileghi.txt", data, (err) => {
//     if (!err) console.log("process suceesful");
//   });
// });

// const file = fs.open(".file.txt");
// for (const line of file.readLines()) {
//     console.log(line);
// }
