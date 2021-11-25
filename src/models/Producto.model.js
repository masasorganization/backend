const mongoose = require ('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema({

    fechaCreacion:Date,
    categoria:{type:String, required:true},
    nombre:{type:String, required:true},
    porciones:{type:String, required:true},
    topping:{type:String, required:false},
    valor:{type:Number, required:true},
    descripcion:{type:String, required:true},
    ingredientes:{type:String, required:true},
    
    
})

module.exports = mongoose.model ('producto', ProductoSchema)