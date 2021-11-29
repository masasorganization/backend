const mongoose = require ('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema({

    categoria:{type:String},
    nombre:{type:String},
    porciones:{type:String},
    topping:{type:String},
    valor:{type:Number},
    descripcion:{type:String},
    ingredientes:{type:String},
    
    
})

module.exports = mongoose.model ('producto', ProductoSchema)