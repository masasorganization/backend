const mongoose = require ('mongoose')
const {Schema} = mongoose

const VendedorSchema = new Schema({

    nombres:{type:String, required:true, maxlength:40},
    apellidos:{type:String, required:true, maxlength:40},
    usuario:{type:String, required:true, maxlength:40},
    pass:{type:String, required:true, maxlength:40},
    puesto:String,
    jefe:String,
})

module.exports = mongoose.model ('vendedor', VendedorSchema)