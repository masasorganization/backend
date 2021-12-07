const mongoose = require('mongoose');
const {Schema}= mongoose;

//Creamos el Schema
const JefeSchema = new Schema({

    nombre:{type:String},
    apellido:{type:String},
    correo:{type:String},
    usuario: {type:String, require:true, unique:true},
    contrasena:{type:String, require:true, unique:true},
    
    roles:[{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},
{
    timestamps:true,
    versionKey:false
}

)

//Generando el modelo
module.exports=mongoose.model('jefe', JefeSchema)

