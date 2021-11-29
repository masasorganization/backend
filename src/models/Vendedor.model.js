const mongoose = require ('mongoose')
const {Schema} = mongoose

const VendedorSchema = new Schema({

    nombres:{type:String, required:true},
    apellidos:{type:String, required:true},
    usuario:{type:String, required:true},
    password:{type:String, required:true},
    
})

module.exports = mongoose.model ('vendedor', VendedorSchema)