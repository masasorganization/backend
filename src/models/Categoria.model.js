const mongoose = require ('mongoose')
const {Schema} = mongoose

const CategoriaSchema = new Schema({

    fechaCreacion:Date,
    nombre:String,
    descripcion:String    
})

module.exports = mongoose.model ('categoria', CategoriaSchema)