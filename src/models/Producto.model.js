const mongoose = require ('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema({

    fechaCreacion:Date,
    categoria:String ,
    nombre:String,
    porciones:Number,
    precio:Number,
    descripcion:String,
    ingredientes:String,
    
    
})

module.exports = mongoose.model ('producto', ProductoSchema)