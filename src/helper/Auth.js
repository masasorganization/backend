//Crear validaciones para evitar que cualquier persona revise info por las rutas

const Auth ={}

const jwt = require('jsonwebtoken')

Auth.verificarToken = (req,res,next) =>{

    if( ! req.headers.autorizacion){

        return res.json({
            mensaje: 'No estas autorizado'
        })
    }

    //Validar si son nulos
    const token = req.headers.autorizacion

    if(token ==='null'){

        return res.json({

            mensaje: 'No estas autorizado'
        })
    }

    //Verificar si el token es valido

    jwt.verify(token, 'Secreta',(error, resultado) => {
        
        if(error) return res.json({
            mensaje:'No estas autorizado'
        }) 

        next()
    })

}

module.exports = Auth