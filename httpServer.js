const fs=require('fs');
const http = require('http');
const port = 1109;

const server = http.createServer(function(req, res) {
    if ( req.method === 'GET' && req.url === '/'){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    }else if ( req.method === 'GET' && req.url === '/pets'){
    fs.readFile('pets.json','utf8',function(error,data){
        if(error){
            console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
        }
        var pets=data
        res.setHeader('Content-Type', 'application/json');
        res.end(pets);
    })
   } else if(req.method === 'GET' && req.url === `/pets/0`){
    fs.readFile('pets.json','utf8',function(error,data){
        if(error){
            console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
        }
        var pets=JSON.parse(data)
        var petsJSON=JSON.stringify(pets[0])
        res.setHeader('Content-Type', 'application/json');
        res.end(petsJSON);
    })
    }else if(req.method === 'GET' && req.url === `/pets/1`){
    fs.readFile('pets.json','utf8',function(error,data){
        if(error){
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
        }
        var pets=JSON.parse(data)
        var petsJSON=JSON.stringify(pets[1])
        res.setHeader('Content-Type', 'application/json');
        res.end(petsJSON);
        })
        }
    else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
    }
    });

server.listen(port, function() {
  console.log('Listening on port :', port);
});
