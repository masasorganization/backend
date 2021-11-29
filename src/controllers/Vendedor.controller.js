const VendedorCtrl={}

const Vendedor = require('../models/Vendedor.model')

VendedorCtrl.crear = async(req,res) => {

    const {nombres, apellidos, usuario, password} = req.body

    const NuevoVendedor = new Vendedor({

        nombres,
        apellidos,
        usuario,
        password
    })

    const respuesta = await NuevoVendedor.save()

    res.json({

        mensaje: 'Vendedor agregado correctamente'

    })

}

//Funcion listar Vendedores

VendedorCtrl.listar = async (req,res) => {

    const respuesta = await Vendedor.find()

    res.json(respuesta)

}    

//Encontrar Vendedor por ID

VendedorCtrl.buscarporId = async(req,res) =>{
    
    //Uso el id que me da el usuario
    const id = req.params.id;

    //Match de Ids
    const respuesta = await Vendedor.findOne({_id:id})
    res.json(respuesta)

}

//Listar Vendedor por jefe

VendedorCtrl.Vendedorporjefe = async(req,res) =>{

    const id = req.params.id;
    const respuesta = await Vendedor.find({jefe:id})
    res.json(respuesta)

}

//Eliminar Vendedor

VendedorCtrl.eliminar = async (req,res) =>{
    const id = req.params.id
    await Vendedor.findByIdAndRemove({_id:id})

    res.json({
        mensaje: 'Vendedor eliminado'
    })
}

//Actualizar Vendedor

VendedorCtrl.actualizar = async (req,res) =>{

    const id = req.params.id;
    await Vendedor.findByIdAndUpdate({_id:id}, req.body)

    res.json({
        mensaje:'Vendedor actualizado'
    })
}

//Busqueda de Vendedor


VendedorCtrl.buscarVendedor = async (req,res) =>{

    const nombres = req.params.nombres;
    const respuesta = await Vendedor.find({nombres:{$regex:".*"+nombres+".*"}}, req.body)

    res.json(respuesta)
}



module.exports = VendedorCtrl