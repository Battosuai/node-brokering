const express = require("express");
const fs = require("node:fs");

const cache = require("./routeCache");

const app = express();

app.get("/download", (req, res, next) => {
  const fileStream = fs.createReadStream(`${__dirname}/data/planets.csv`);
  fileStream.on("open", () => {
    // res.set({
    //   "Content-Type": "text/csv",
    //   "Content-Disposition": 'attachment; filename="myFile.csv"',
    // });
    res.attachment("myFile.csv");
    fileStream.pipe(res);
  });

  fileStream.on("error", (err) => {
    next(err);
  });
});

app.get("/data", cache(300), (req, res, next) => {
  const fileData = fs.readFileSync(`${__dirname}/data/planets.csv`);
  res.json({ ...fileData });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
