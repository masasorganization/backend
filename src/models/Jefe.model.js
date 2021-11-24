const mongoose = require('mongoose');
const {Schema}= mongoose;

//Creamos el Schema
const JefeSchema = new Schema({

    nombre:{type:String, required:true},
    correo:{type:String, required:true},
    usuario: {type:String, required:true},
    contrasena:{type:String, required:true}
})

//Generando el modelo
module.exports=mongoose.model('jefe', JefeSchema)

