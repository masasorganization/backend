const AdministradorCtrl = {}
const Administrador = require('../models/Administrador.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

AdministradorCtrl.crearAdministrador = async(req,res) => {
    const {nombre,username,password} = req.body;

    const NuevoAdministrador = new Administrador({
        nombre,
        username,
        password
    })

    const usernameAdministrador = await Administrador.findOne({username:username})

    if(usernameAdministrador){
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }else{
        NuevoAdministrador.password = await bcrypt.hash(password,10)
        const token = jwt.sign({_id:NuevoAdministrador._id})
        await NuevoAdministrador.save()
        res.json({
            mensaje: 'Bienvenid@ a Ma SAS',
            id: NuevoAdministrador._id,
            username: NuevoAdministrador.username,
            token
        })
    }
    
}

module.exports = AdministradorCtrl
