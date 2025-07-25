const express = require('express');
const app = express();
const morgan = require('morgan');
const {mongoose} = require('./database');

//settings
const port = 3000;
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware
app.use(morgan('tiny'));


//Funcion
function logger(req,res,next){
    console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl);
    next();
}

//routes
app.use(require('./src/routes/server.routes.js'));



app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
} );
