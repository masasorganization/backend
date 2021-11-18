const CategoriaCtrl={}

const Categoria = require('../models/Categoria.model')


//Crear categoria

CategoriaCtrl.crear = async(req,res) => {

    const {fechaCreacion, nombre, descripcion} = req.body

    const NuevaCategoria = new Categoria
({

        fechaCreacion,
        nombre,
        descripcion
        
    })

    const respuesta = await NuevaCategoria.save()

    res.json({

        mensaje: 'La Categoria se agregó satisfactoriamente'

    })

}


//Funcion listar Categorias

CategoriaCtrl.listar = async (req,res) => {

    const respuesta = await Categoria.find()

    res.json(respuesta)

}    

//Encontrar Categoria por ID

CategoriaCtrl.listarId = async(req,res) =>{
    
    //Uso el id que me da el usuario
    const id = req.params.id;

    //Match de Ids
    const respuesta = await Categoria.findOne({_id:id})
    res.json(respuesta)

}


//Eliminar Categoria

CategoriaCtrl.eliminar = async (req,res) =>{
    const id = req.params.id
    await Categoria.findByIdAndRemove({_id:id})

    res.json({
        mensaje: 'Categoria eliminada'
    })
}

//Actualizar Categoria

CategoriaCtrl.actualizar = async (req,res) =>{

    const id = req.params.id;
    await Categoria.findByIdAndUpdate({_id:id}, req.body)

    res.json({
        mensaje:'Categoria actualizada'
    })
}

//Busqueda de Categoria

CategoriaCtrl.buscarCategoria = async (req,res) =>{

    const nombre = req.params.nombre;
    const respuesta = await Categoria.find({nombre:{$regex:".*"+nombre+".*"}}, req.body)

    res.json(respuesta)
}

module.exports = CategoriaCtrl