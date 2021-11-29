const mongoose = require('mongoose');
const {Schema}= mongoose;

//Creamos el Schema
const JefeSchema = new Schema({

    nombre:{type:String},
    correo:{type:String},
    usuario: {type:String},
    contrasena:{type:String}
})

//Generando el modelo
module.exports=mongoose.model('jefe', JefeSchema)

