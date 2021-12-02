const mongoose = require ('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema({

    categoria:{type:String},
    nombrePto:{type:String},
    valor:{type:Number},
    descripcion:{type:String},
    ingredientes:{type:String},
}, {
    timestamps:true,
    versionKey:false
    })

module.exports = mongoose.model ('producto', ProductoSchema)