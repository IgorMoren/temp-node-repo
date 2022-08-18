// GLOBALS  -NO WINDOW (no tenemos al objeto window como en js ya que no trabaja con el navegador por ejemplo queryselector)

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__filename);
console.log(__dirname);

let numb = 0;

/* Tiene metodos de js tipicos como set interval etc */
setInterval(() => {
	numb++;
	console.log(`Intervalo segundos:`, numb);
}, 1000);
