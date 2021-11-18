const mongoose = require ('mongoose')
const {Schema} = mongoose

const VentaSchema = new Schema({

    fechaCreacion:Date,
    idCompra:String,
    nombres:String,
    apellidos:String,
    identificacion:Number,
    telefono:Number,
    direccion:String,
    fechaEntrega:Date,
    vendedor:String        
    
})

module.exports = mongoose.model ('venta', VentaSchema)