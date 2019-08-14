const fs = require("fs");
const sanitizeHtml = require("sanitize-html");
function correctHtml (element) {
  return element;
}
function correctHtmlFromFile (filename) {
  var content = fs
    .readFileSync(filename)
    .toString()
    .replace(/\t/g, "")
    .replace(/\r/g, "")
    .replace(/\n/g, "");
  var contentSantize = sanitizeHtml(content, {
    allowedTags: ["p", "br", "div", "h1", "h2", "h3", "h4"],
    allowedAttributes: {
      div: ["style"],
      p: ["style"],
      h1: ["style"],
      h2: ["style"],
      h3: ["style"],
      h4: ["style"]
    }
  });
  console.log("contentSantize: ", contentSantize);
  fs.writeFileSync("./test2.html", contentSantize);
}
correctHtmlFromFile("./test.html");
module.exports = {
  correctHtml: correctHtml,
  correctHtmlFromFile: correctHtmlFromFile
};
