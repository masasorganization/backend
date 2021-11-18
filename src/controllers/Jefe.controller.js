const JefeCtrl = {}

const Jefe = require('../models/Jefe.model');

const bcrypt= require('bcryptjs');

const jwt = require ('jsonwebtoken');


JefeCtrl.crearJefe = async(req,res) =>{
    //Require
    const {nombre,correo,contrasena} = req.body;
    
    //Creo el objeto para ser enviado
    const NuevoJefe = new Jefe({
        nombre,
        correo,
        contrasena
    })

    //------Validaaciones
    //1. Si existe el correo, no me deje ingresar el objeto a la BD
    //Obtener el correo
    const correoJefe = await Jefe.findOne({correo:correo})

    //Validar
    if (correoJefe){

        res.json({
            mensaje:'El correo ya existe' 
        })

    }

    else{
        //Generamos contraseña encriptada
        NuevoJefe.contrasena = await bcrypt.hash(contrasena, 10)

        const token = jwt.sign({_id:NuevoJefe._id}, 'Secreta')
        await NuevoJefe.save()
        res.json({
            mensaje:'Jefe creado con exito',
            id:NuevoJefe._id,
            nombre: NuevoJefe.nombre,
            token
        })
    }
}


//Creando LOGIN

JefeCtrl.login = async(req,res) => {

    const {correo, contrasena} = req.body
    const jefe = await Jefe.findOne({correo:correo})

    //El correo está en la BD?
    if(!jefe){
        return res.json({

            mensaje: 'Correo o contraseña invalidos'
        })
    }

    //Comparando contraseñas

    const match = await bcrypt.compare(contrasena, jefe.contrasena)

    if(match){

        const token = jwt.sign({_id:Jefe._id}, 'Secreta')
        res.json({

            mensaje:'Bienvenido!',
            id:Jefe._id,
            nombre:Jefe.nombre,
            token


        })
    }
    else{
        res.json({
            mensaje:'Correo o contraseña invalidos'
        })
    }

}


//Exportando module

module.exports=JefeCtrl



