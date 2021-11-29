const mongoose = require ('mongoose')
const {Schema} = mongoose

const VentaSchema = new Schema({

    fechaCreacion:Date,
    nombres:{type:String},
    apellidos:{type:String},
    tipoDocumento:{type:String},
    numDocumento:{type:Number},
    direccion:{type:String},
    numeroCasa:{type:String},
    barrio:{type:String},
    telefono:{type:Number},
    fechaEntrega:{type:Date},
    
})

module.exports = mongoose.model ('venta', VentaSchema)