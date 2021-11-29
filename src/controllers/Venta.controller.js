const VentaCtrl={}

const Venta = require('../models/Venta.model')

VentaCtrl.crear = async(req,res) => {

    const {categoria, nombrePto, tamano, complementos, unidades, valorFinal, nombres, apellidos, tipoDocumento, numDocumento, direccion, numeroCasa, barrio, telefono, fechaEntrega} = req.body

    const NuevaVenta = new Venta({

        categoria,
        nombrePto,
        tamano,
        complementos,
        unidades,
        valorFinal,
        nombres,
        apellidos,
        tipoDocumento,
        numDocumento,
        direccion,
        numeroCasa,
        barrio,
        telefono, 
        fechaEntrega    
    })

    const respuesta = await NuevaVenta.save()

    res.json({

        mensaje: 'La venta se registró correctamente'

    })

}


//Funcion listar Ventas

VentaCtrl.listar = async (req,res) => {

    const respuesta = await Venta.find()

    res.json(respuesta)

}    

//Encontrar Venta por ID

VentaCtrl.listarId = async(req,res) =>{
    
    //Uso el id que me da el usuario
    const id = req.params.id;

    //Match de Ids
    const respuesta = await Venta.findOne({_id:id})
    res.json(respuesta)

}

//Listar Venta por categoria

    VentaCtrl.porCategoria = async(req,res) => {

    const categoria = req.params.categoria;
    const respuesta = await Venta.find({categoria:categoria})
    res.json(respuesta)

}

//Eliminar Venta

VentaCtrl.eliminar = async (req,res) =>{
    const id = req.params.id
    await Venta.findByIdAndRemove({_id:id})

    res.json({
        mensaje: 'Venta eliminada'
    })
}

//Actualizar Venta

VentaCtrl.actualizar = async (req,res) =>{

    const id = req.params.id;
    await Venta.findByIdAndUpdate({_id:id}, req.body)

    res.json({
        mensaje:'Venta actualizada'
    })
}

//Busqueda de Venta

VentaCtrl.buscarVenta = async (req,res) =>{

    const nombres = req.params.nombres;
    const respuesta = await Venta.find({nombres:{$regex:".*"+nombres+".*"}}, req.body)

    res.json(respuesta)
}



module.exports = VentaCtrl