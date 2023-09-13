//
const express = require("express");
const app = express();
const fs = require("fs");
const port = 4000;

const timestamp = Date.now();
const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() + 1;
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();

let data = `Date: ${year}-${month}-${date} Time: ${hours}:${minutes}:${seconds}`;

const myTargetFolder = "myFolder";
if (!fs.existsSync(myTargetFolder)) {
  fs.mkdir(`./${myTargetFolder}`, (err) => {
    console.error(err);
  });
}

fs.writeFile(`./${myTargetFolder}/date-time.txt`, data, (err) => {
  if (err) {
    throw err;
  }
  console.log("file created successfully !!!!");
});
//
//
//
//
app.get("/", (req, res) => {
  res.send("Successfully created !!!!");
});

//
//
//
//
//
//
//
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
