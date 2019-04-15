const express = require("express");

const app = express();




let personRoute = require ("./routes/person");
let customerRoute = require ("./routes/customer");
let bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let path= require('path');


app.use ((req,res,next)=>{
   console.log ( `${new Date().toString()} => ${req.originalUrl}`);
    next();
});
app.use(express.static('public'));
app.use(personRoute);
app.use(customerRoute);


//handler per 404 page not found
app.use ((req,res,next)=>{
   res.status(404).send (" 404 error page not found");
});

app.use ((err,req,res,next )=>{
   console.error(err.stack);
   res.sendFile(path.join(__dirname,'../public/500.html'))
});


const corsi = [
    {id: 1, nome: "mat"},
    {id: 2, nome: 'geo'},
    {id: 3, nome: "ita"}
];

app.get('/', (req, res) => {
        res.send(res);
    }
);

app.get('/api/corsi', (req, res) => {
    res.send(corsi);
});

app.get('/api/corsi/:id', (req, res) => {
    var corso = corsi.find(c => c.id === parseInt(req.params.id));
    if (!corso) res.status(404).send("id necessario");
    res.send(corso);
});

app.post("/api/test",(req,res)=>{
    console.log(req);
    res.send();
});

app.post('/api/corsi/aggiungiCorso',(req,res)=>{
    console.log(req.params);
    if (req.body!=undefined && req.body.nome != undefined ){
        corsi.push( {'id': corsi.length+1, 'nome':req.body.nome });
        res.send("inserito con successo");
    }else {
        res.status(400).send("parametro nome richiesto");
    }


});

app.listen(3000, () => console.log('LISTENING!!'));
