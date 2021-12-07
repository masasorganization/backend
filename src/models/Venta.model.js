const mongoose = require ('mongoose')

const {Schema} = mongoose

const VentaSchema = new Schema({

    categoria:{type:String},
    nombrePto:{type:String},
    tamano:{type:String},
    complementos:{type:String},
    unidades:{type:String},
    valorFinal:{type:String},
    nombres:{type:String},
    apellidos:{type:String},
    tipoDocumento:{type:String},
    numeroDocumento:{type:Number},
    direccion:{type:String},
    numeroCasa:{type:String},
    barrio:{type:String},
    telefono:{type:Number},
    fechaEntrega:{type:String},
    
}, {
    timestamps:true,
    versionKey:false
    
    })

module.exports = mongoose.model ('venta', VentaSchema)
