const { readFile, writeFile } = require("fs");

const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

/* En vez de utilizar la variable de readFilePromise en los siguientes await se puede cambiar por
las propiedades de readFile y writeFile
- comentando las variables util readFilePromise y writeFilePromise
- y cambiardo la importacion inicial por:
const { readFile, writeFile } = require("fs").promises; ya que asi nos devolvera una promesa
 */
const start = async () => {
	try {
		const first = await readFilePromise("./content/first.txt", "utf8");
		const second = await readFilePromise("./content/second.txt", "utf8");
		await writeFilePromise(
			"./content/result-mind-grenade.txt",
			`This is awesome: ${first} ${second}`
		);
		console.log(first, second);
	} catch (err) {
		console.log(err);
	}
};

start();

/* const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, "utf8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}; */

/* getText("./content/first.txt")
.then((result) => console.log(result))
.catch((err) => console.log(err)); */
