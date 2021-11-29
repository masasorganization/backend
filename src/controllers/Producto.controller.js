const ProductoCtrl={}

const Producto = require('../models/Producto.model')

ProductoCtrl.crear = async(req,res) => {

    const {fechaCreacion, categoria, nombrePto, porciones, topping, valor, descripcion, ingredientes} = req.body

    const NuevoProducto = new Producto({

        fechaCreacion,
        categoria ,
        nombrePto,
        porciones,
        topping,
        valor,
        descripcion,
        ingredientes,
    })

    const respuesta = await NuevoProducto.save()

    res.json({

        mensaje: 'El producto se agregó satisfactoriamente'

    })

}


//Funcion listar productos

ProductoCtrl.listar = async (req,res) => {

    const respuesta = await Producto.find()

    res.json(respuesta)

}    

//Encontrar producto por ID

ProductoCtrl.listarId = async(req,res) =>{
    
    //Uso el id que me da el usuario
    const id = req.params.id;

    //Match de Ids
    const respuesta = await Producto.findOne({_id:id})
    res.json(respuesta)

}

//Eliminar Producto

ProductoCtrl.eliminar = async (req,res) =>{
    const id = req.params.id
    await Producto.findByIdAndRemove({_id:id})

    res.json({
        mensaje: 'Producto eliminado'
    })
}

//Actualizar Producto

ProductoCtrl.actualizar = async (req,res) =>{

    const id = req.params.id;
    await Producto.findByIdAndUpdate({_id:id}, req.body)

    res.json({
        mensaje:'Producto actualizado'
    })
}

//Busqueda de Producto

ProductoCtrl.buscarProducto = async (req,res) =>{

    const nombrePto = req.params.nombrePto;
    const respuesta = await Producto.find({nombrePto:{$regex:".*"+nombrePto+".*"}}, req.body)

    res.json(respuesta)
}

//Busqueda por categoria

ProductoCtrl.buscarporCategoria = async (req,res) =>{

    const categoria = req.params.categoria;
    const respuesta = await Producto.find({categoria:{$regex:".*"+categoria+".*"}}, req.body)

    res.json(respuesta)
}


module.exports = ProductoCtrl