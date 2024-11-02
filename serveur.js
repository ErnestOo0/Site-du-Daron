var express = require("express");

var app = express();
const PORT = 8080
app.listen(PORT);
console.log("demarage du serveur sur le port "+PORT);

app.get('/', (request, response) => {
    response.sendFile('home/homePage.html', {root: __dirname});
    console.log("nouvelle connexion")
});

app.get('/js/:file', (request, response) => {
    response.sendFile(request.params.file, {root: __dirname});
    console.log("envoie du fichier js ", request.params.file);
});

app.get('/file/:folder/:file', (request, response) => {
    response.sendFile(request.params.folder+"/"+request.params.file, {root: __dirname});
    console.log("envoie de ", request.params.file);
});

app.get('/data/:data', (request, response) => {
    response.sendFile("data/"+request.params.data, {root: __dirname});
    //response.json(request.params.data);
    console.log("envoie du fichier ", request.params.data);
});

