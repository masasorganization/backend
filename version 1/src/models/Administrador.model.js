const mongoose=require('mongoose');
const {Schema}=mongoose;

const AdministradorSchema = new Schema({
    nombre: String,
    username: String,
    password: String,
    estado: {type: Boolean, default: true}

})

module.exports=mongoose.model('administrador', AdministradorSchema)