// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun) Todos los archivos son per se modulos

const names = require("./4-names");

const sayHi = require("./5-utils");

const altFlavor = require("./6-alternative-flavor");

require("./7-mind-grenade");
/* Terminal: the sum is: 15 */
//Como en mind-grenade hemos invocado a la funcion se ejecuta sin tener que asignarla a ningun valor

console.log(names);
console.log(sayHi);
console.log(altFlavor.items);

sayHi("Igor");

sayHi(names.susana);

sayHi(names.mike);

//Tambien se puede desestructurar

const { susana, mike } = require("./4-names");

sayHi(`desestructurado ${susana}`);
sayHi(`desestructurado ${mike}`);
