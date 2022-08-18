//path module nos permite  interactuar con los file paths de manera facil

const path = require("path");

//El separador por defecto de nuestro sistema
console.log(path.sep);

const filePath = path.join("/content", "////subfolder", "test.txt");
//Nos junta el path normalizandolo
console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
const absolute2 = path.resolve(__dirname);

console.log(absolute);
console.log(absolute2);
