const ProductoCtrl={}

const Producto = require('../models/Producto.model')

//Crear producto
//---------------------------------------------------------
ProductoCtrl.crear = async(req,res) => {

    const {categoria, nombrePto, valor, descripcion, ingredientes} = req.body

    const NuevoProducto = new Producto({

        categoria,
        nombrePto,
        valor,
        descripcion,
        ingredientes,
    })

    const respuesta = await NuevoProducto.save()
 
    res.json({

        mensaje: 'El producto se agregó satisfactoriamente',
        
    })

}

//Listar productos
//---------------------------------------------------------
ProductoCtrl.listar = async (req,res) => {

    const respuesta = await Producto.find()

    res.json(respuesta)

}    

//Actualizar Producto
//---------------------------------------------------------
ProductoCtrl.actualizar = async (req,res) =>{

    const id = req.params.id;
    //Encuentra el id y devuelve el nuevo req.body (la actualización de la info)
    await Producto.findByIdAndUpdate({_id:id}, req.body) 

    res.json({
        mensaje:'Producto actualizado'
    })
}

//Eliminar Producto
//---------------------------------------------------------
ProductoCtrl.eliminar = async (req,res) =>{
    const id = req.params.id
    await Producto.findByIdAndRemove(id)

    res.status(204).json({
        mensaje: 'Producto eliminado'
    })
}

/////------------------------BUSQUEDAS--------------------------/////

//Buscar por ID
//---------------------------------------------------------
ProductoCtrl.buscarPorId = async(req,res) =>{
    
    //Guardando el id que me da el usuario
    const id = req.params.id;
    //Encontrando por id
    const respuesta = await Producto.findById(id)
    res.json(respuesta)
    
}

//Buscar por nombre
//---------------------------------------------------------
ProductoCtrl.buscarPorNombre = async (req,res) =>{

    const nombrePto = req.params.nombrePto;
    const respuesta = await Producto.find({nombrePto:{$regex:".*"+nombrePto+".*"}}, req.body)

    res.json(respuesta)
}

//Buscar por categoria
//---------------------------------------------------------
ProductoCtrl.buscarporCategoria = async (req,res) =>{

    const categoria = req.params.categoria;
    const respuesta = await Producto.find({categoria:{$regex:".*"+categoria+".*"}}, req.body)

    res.json(respuesta)
}


module.exports = ProductoCtrl