const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to the home page");
	} else if (req.url === "about") {
		res.end("Hasta aqui la pequeña historia");
	} else
		res.end(`
   <h1>OOps!</h1>
   <p>Pagina no encontrada</p>
   <a href="/">Back Home</a> `);
});

server.listen(5000);
