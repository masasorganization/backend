const mongoose=require('mongoose');
const {Schema}=mongoose;

const VendedorSchema = new Schema({
    nombre: String,
    username: String,
    password: String,
    estado: {type: Boolean, default: true}

})

module.exports=mongoose.model('vendedor', VendedorSchema)