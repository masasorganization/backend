const mongoose = require ('mongoose')
const {Schema} = mongoose

const CategoriaSchema = new Schema({

    fechaCreacion:Date,
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true}    
})

module.exports = mongoose.model ('categoria', CategoriaSchema)