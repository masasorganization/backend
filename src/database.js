const mongoose = require ('mongoose');

//NO FUNCIONÓ CON DOTNEV sin atributos-*--*-*--*-*-*-require('dotenv').config();

//Es necesario indicar la ruta del archivo .env
require ('dotenv').config({path:"src/.env"});

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.sh9bv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Conection with 2 parameters (uri and options)
// with arrow function
mongoose.connect(uri, options).then(
    () => { console.log ('Conectado a DB') },
    err => { console.log (err) }
);

//Conection exportation

module.exports = mongoose  

