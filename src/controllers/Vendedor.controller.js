const VendedorCtrl = {}
const Vendedor = require('../models/Vendedor.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

VendedorCtrl.crearVendedor = async(req,res) => {
    const {nombre,username,password} = req.body;

    const NuevoVendedor = new Vendedor({
        nombre,
        username,
        password
    })

    const usernameVendedor = await Vendedor.findOne({username:username})

    if(usernameVendedor){
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }else{
        NuevoVendedor.password = await bcrypt.hash(password,10)
        const token = jwt.sign({_id:NuevoVendedor._id})
        await NuevoVendedor.save()
        res.json({
            mensaje: 'Bienvenid@ a Ma SAS',
            id: NuevoVendedor._id,
            username: NuevoVendedor.username,
            token
        })
    }
    
}

module.exports = VendedorCtrl
