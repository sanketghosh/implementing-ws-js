import { createServer } from "http"
const PORT = 8000


// creating a server without any framework

createServer((request, response) => {
	response.writeHead(200)
	response.end('hey there')
}).listen(PORT, () => 
	console.log(`Node server running on http://localhost:${PORT}`)
);


// error handling to keep server on
[
	"uncaughtException",
	"unhandledRejection"
].map(())


//console.log("hello world")

