const fs = require("node:fs");

// fs.readFile("./test.json", "utf-8", (err, result) => {
//   if (err) {
//     console.error(err);
//   } else {
//     try {
//       const data = JSON.parse(result);
//       console.log(data.address);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// });

// try {
//   const result = fs.readFileSync("./test.json", "utf-8");
//   const data = JSON.parse(result);
//   console.log(data.address);
// } catch (error) {
//   console.error(error);
// }

// function jsonReader(filePath, cb) {
//   fs.readFile(filePath, "utf-8", (err, fileData) => {
//     if (err) {
//       console.error(err);
//       return cb && cb(err);
//     }

//     try {
//       const data = JSON.parse(fileData);
//       return cb && cb(null, data);
//     } catch (error) {
//       console.error(error);
//       return cb && cb(error);
//     }
//   });
// }

// jsonReader("./test.json", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

const object = {
  name: "Robin",
  age: 33,
  address: "Rome",
};

const objectString = JSON.stringify(object, null, 2);

fs.writeFile("./test.json", objectString, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Write successful");
  }
});
