const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = 8080
server.listen(PORT, () => {console.log('Le serveur écoute sur le port '+PORT);});

app.get('/', (request, response) => {
    response.sendFile('homePage.html', {root: __dirname});
});

app.get('/file/:file', (request, response) => {
    response.sendFile(request.params.file, {root: __dirname});
    console.log("envoie de ", request.params.file);
});

app.get('/data/:data', (request, response) => {
    response.end(request.params.data, {root: __dirname});
    console.log("envoie du fichier ", request.params.data);
});

