const mongoose = require ('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema({

    categoria:{type:String},
    nombrePto:{type:String},
    valor:{type:String},
    descripcion:{type:String},
    ingredientes:{type:String}
    
})

module.exports = mongoose.model ('producto', ProductoSchema)