const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) return null;
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) return null;
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}\n`,
      (err, result) => {
        if (err) return null;
        console.log(result);
      }
    );
  });
});
