//Leer escribir documentos de forma sincrona

const { readFileSync, writeFileSync } = require("fs");

console.log("Start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${first}, ${second}`,
	{ flag: "a" }
);
//Con el flag a le indicamos que nos concatene y no sobreescriba el archivo
console.log("Done");
console.log("Starting next");
