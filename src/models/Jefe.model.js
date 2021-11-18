const mongoose = require('mongoose');
const {Schema}= mongoose;

//Creamos el Schema
const JefeSchema = new Schema({

    nombre:String,
    correo:String,
    contrasena:String
})

//Generando el modelo
module.exports=mongoose.model('jefe', JefeSchema)

