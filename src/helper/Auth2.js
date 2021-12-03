const Auth2 ={}

const jwt = require('jsonwebtoken');
const Jefe = require('../models/Jefe.model');
const Role = require('../models/Role');

const verificarToken = async (req,res,next)=>{
    try {
        const token = req.headers["autorizacion"];

    if (!token) return res.status(403).json({mensaje:"Token no asignado"});

    const decoded = jwt.verify(token, 'Secreta')

    req.jefeId = decoded.id;

    const jefe = await Jefe.findById(req.jefeId, {password:0});
    if (!jefe) return res.status(404).json({mensaje:"Usuario no encontrado"});

    next();
    } catch (error) {
      return res.status(401).json({mensaje:"No autorizado"})  

    }

}

const isAdmin = async (req,res,next) => {
   
     const jefe = await Jefe.findById(req.jefeId)

     const roles = await Role.find({_id: {$in: jefe.roles}})

     for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
     
    }
      return res.status(403).json({mensaje:"Solo rol administrador"})
}      
    
module.exports = {verificarToken,isAdmin}