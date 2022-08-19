/* Cuando los archivos son muy grande no podemos asignar ese archivo a una variable (10-fs-sync)
Para ello se utilizan los streams*/
const { createReadStream } = require("fs");

/* Con highWaterMark cambiamos el tamaño por defecto de los chunks, por defecto 64kb  */
const stream = createReadStream("../content/big.txt", {
	highWaterMark: 90000,
	encoding: "utf8",
});

//default 64kb
//last buffer -  remainder
// highWaterMaker - control size
// const stream = createReadStream("./content/big.txt", { highWaterMark: 90000});
// const stream = createReadStream("./content/big.txt", { encoding: 'utf8' });

stream.on("data", (result) => {
	console.log(result);
});
/* 
console.log() Nos devuelve el resultado en chunks de 64 kb:

<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 
31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 32 0a 68 65 6c 6c 6f 20 77 6f ... 65486 more bytes>

<Buffer 77 6f 72 6c 64 20 33 39 32 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 
31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 32 0a 68 65 6c 6c 6f ... 65486 more bytes>

<Buffer 6f 72 6c 64 20 37 37 37 35 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 36 
0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 37 0a 68 65 6c 6c 6f 20 ... 37768 more bytes>
*/

stream.on("error", (err) => {
	console.log(err);
});
