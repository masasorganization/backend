const JefeCtrl = {}

const Jefe = require('../models/Jefe.model');

const Role = require('../models/Role');

const bcrypt= require('bcryptjs');

const jwt = require ('jsonwebtoken');


JefeCtrl.crear = async(req,res) =>{
    //Require
    const {nombre,correo,usuario,contrasena, roles} = req.body;
    
    //Creo el objeto para ser enviado
    const NuevoJefe = new Jefe({
        nombre,
        correo,
        usuario,
        contrasena,
        
    })
    
    // ------Validaaciones
    // 1. Si existe el correo, no me deje ingresar el objeto a la BD
    // Obtener el correo
    const usuarioJefe = await Jefe.findOne({usuario:usuario})

    //Validar
    if (usuarioJefe){

        res.json({
            mensaje:'El usuario ya existe' 
        })
    }

    else{
        
        //Generamos contraseña encriptada
        NuevoJefe.contrasena = await bcrypt.hash(contrasena, 10)

            if (roles){
                const rolesEncontrados = await Role.find({name:{$in: roles}})
                NuevoJefe.roles = rolesEncontrados.map(role => role._id)
            }
            else{
                const role = await Role.findOne({name:"vendedor"})
                NuevoJefe.roles = [role._id];
            }
          
        await NuevoJefe.save()    
        
        //Asignamos un token al usuario recien creado
        const token = jwt.sign({id:NuevoJefe._id}, 'Secreta', {expiresIn:10800})
        //-----------------------------------------------------Token expira en 3 horas
            res.json({
            mensaje:'Jefe creado con exito',
            id:NuevoJefe._id,
            nombre: NuevoJefe.nombre,
            token
        })
    }
}

//Creando LOGIN----------------------------------------
//-----------------------------------------------------
JefeCtrl.login = async(req,res) => {

    const {usuario, contrasena} = req.body
    const jefe = await Jefe.findOne({usuario:usuario}).populate("roles");

    //El correo está en la BD?
    if(!jefe){
        return res.status(400).json({

            mensaje: 'Usuario o contraseña invalidos'
        })
        
    }
    
    //Comparando contraseñas

    const match = await bcrypt.compare(contrasena, jefe.contrasena)

    if(match){

        const token = jwt.sign({id:jefe.id}, 'Secreta', {expiresIn:10800})
        //-------------------------------------------------Token expira en 3 horas
        res.json({

            mensaje:'Bienvenido!',
            id:jefe._id,
            nombre:jefe.nombre,
            token

        })
    }
   
    else{
        res.status(401).json({
            mensaje:'Usuario o contraseña invalidos'
        })
    }
}


//Listar usuarios
//---------------------------------------------------------
JefeCtrl.listar = async (req,res) => {

    const respuesta = await Jefe.find()

    res.json(respuesta)
}

//Actualizar usuario
//---------------------------------------------------------
JefeCtrl.actualizar = async (req,res) =>{

    const id = req.params.id;
    //Encuentra el id y devuelve el nuevo req.body (la actualización de la info)
    await Jefe.findByIdAndUpdate({_id:id}, req.body)

    res.json({
        mensaje:'Jefe actualizado'
    })
}


//Eliminar usuario
//---------------------------------------------------------
JefeCtrl.eliminar = async (req,res) =>{
    const id = req.params.id
    await Jefe.findByIdAndRemove(id)

    res.status(204).json({
        mensaje: 'Jefe eliminado'
    })
}

/////------------------------BUSQUEDAS--------------------------/////

//Buscar por ID
//---------------------------------------------------------
JefeCtrl.buscarPorId = async(req,res) =>{
    
    //Guardando el id que me da el usuario
    const id = req.params.id;

    //Encontrando por id
    const respuesta = await Jefe.findById(id)
    res.json(respuesta)    

}

//Buscar por nombre
//---------------------------------------------------------
JefeCtrl.buscarPorNombres = async (req,res) =>{

    const nombres = req.params.nombres;
    const respuesta = await Jefe.find({nombres:{$regex:".*"+nombres+".*"}}, req.body)

    res.json(respuesta)
}


//Exportando module

module.exports = JefeCtrl
