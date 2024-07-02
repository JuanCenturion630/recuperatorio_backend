const { createServer } = require('node:http')
//const http = require('node:http')

const hostname = '127.0.0.1'
const port = 3000

const server = createServer((request, response) => {
    response.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    response.end('<h1>Hola Mundo</h1>');
})

server.listen(port, hostname, () => {
    console.log(`El servidor está corriendo en http://${hostname}:${port}/`);
} )

//Si vas a ejecutar un callback, hazlo bien.
/*function miOtraFuncion(param1, param2, callback) {
    callback(param1,param2)
    console.log(`mi primer param: ${param1} y segundo param:${param2} `)
}*/