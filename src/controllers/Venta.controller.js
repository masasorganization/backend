const VentaCtrl={}

const Venta = require('../models/Venta.model')

//Crear producto
//---------------------------------------------------------
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

//Listar ventas
//---------------------------------------------------------
VentaCtrl.listar = async (req,res) => {

    const respuesta = await Venta.find()

    res.json(respuesta)

}    

//Actualizar Producto
//---------------------------------------------------------
VentaCtrl.actualizar = async (req,res) =>{

    const id = req.params.id;
    //Encuentra el id y devuelve el nuevo req.body (la actualización de la info)
    await Venta.findByIdAndUpdate({_id:id}, req.body)

    res.json({
        mensaje:'Venta actualizada'
    })
}

//Eliminar Producto
//---------------------------------------------------------
VentaCtrl.eliminar = async (req,res) =>{
    const id = req.params.id
    await Venta.findByIdAndRemove({_id:id}, req.body)

    res.json({
        mensaje: 'Venta eliminada'
    })
}

/////------------------------BUSQUEDAS--------------------------/////

//Buscar por ID
//---------------------------------------------------------
VentaCtrl.buscarPorId = async(req,res) =>{
    
    //Uso el id que me da el usuario
    const id = req.params.id;

    //Match de Ids
    const respuesta = await Venta.findById(id)
    res.json(respuesta)

}

//Buscar por nombre
//---------------------------------------------------------
VentaCtrl.buscarPorNombres = async (req,res) =>{

    const nombres = req.params;
    const respuesta = await Venta.find({nombres:{$regex:".*"+nombres+".*"}}, req.body)

    res.json(respuesta)
}

//Buscar por categoria
//---------------------------------------------------------
    VentaCtrl.buscarPorCategoria = async(req,res) => {

    const categoria = req.params.categoria;
    const respuesta = await Venta.find({categoria:categoria})
    res.json(respuesta)

    }


module.exports = VentaCtrl