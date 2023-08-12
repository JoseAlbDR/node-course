import { readFile } from "fs";

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (error, data) => {
      if (error) reject("Error");

      if (data) resolve(data);
    });
  });
};

getText("./content/first.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
