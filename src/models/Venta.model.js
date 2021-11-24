const mongoose = require ('mongoose')
const {Schema} = mongoose

const VentaSchema = new Schema({

    fechaCreacion:Date,
    idCompra:String,
    nombres:{type:String, required:true},
    apellidos:{type:String, required:true},
    tipoDocumento:{type:String, required:true},
    numDocumento:{type:Number, required:true},
    direccion:{type:String, required:true},
    numeroCasa:{type:String, required:false},
    barrio:{type:String, required:true},
    telefono:{type:Number, required:true},
    fechaEntrega:{type:Date, required:true},
    vendedor:String        
    
})

module.exports = mongoose.model ('venta', VentaSchema)