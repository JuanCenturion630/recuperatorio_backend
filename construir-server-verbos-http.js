const { createServer } = require('node:http')
//const http = require('node:http')
const { infoLenguajes } = require('./src/lenguajesFrontBack');

const hostname = '127.0.0.1'
const port = 3000

const server = createServer((req, res) => {
    res.statusCode = 200;
    const method = req.method;
    //res.setHeader('Content-Type', 'text/plain');
    switch (method){
        case 'GET':
            return manejarSolicitudGet(req, res);
        case 'POST':
            return manejarSolicitudPost(req, res);
        default:
            res.statusCode = 400
            res.end("No existe esta solicitud en nuestro servidor");
    }

    return res.end('<h1>Hola Mundo</h1>');
})

const manejarSolicitudGet = (req, res) => {
    const path = req.url;
    if(path == '/'){
        return res.end("<h1>BIENVENIDO!!</h1>")
    }else if(path == '/lenguajes'){
        return res.end(JSON.stringify(infoLenguajes))
    }else if(path == '/lenguajes/backend'){
        res.writeHead(200, {'Content-Type':'text/plain'})
        return res.end(JSON.stringify(infoLenguajes.backend))
    }else if(path == '/lenguajes/frontend'){
        return res.end(JSON.stringify(infoLenguajes.frontend))
    }else {
        //res.statusCode = 502
        res.writeHead(404, {'Content-Type':'application/json'})
        return res.end("La pagina que estas intentando buscar no existe.")
    }
}

const manejarSolicitudPost = (req, res) => {
    console.log("manejarSolicitudPost")
    const path = req.url;


    if(path === '/lenguajes/programacion'){
        res.statusCode = 200;

        let body = '';
        req.on('data', contenido => {
            body += contenido.toString();
        });

        req.on('end', () => {
            console.log(body);
            console.log(typeof body);

            body = JSON.parse(body);
            console.log(body);
            console.log(typeof body);
            console.log(body.titulo);
            console.log(body.dormir);
            res.end('El servidor recibio una solicitu POST')
        });
        
       
    };


}

server.listen(port, hostname, () => {
    console.log(`El servidor está corriendo en http://${hostname}:${port}/`);
} )