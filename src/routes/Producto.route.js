const {Router} =require ('express')

const router= Router()

const ProductoCtrl = require('../controllers/Producto.controller')

const {verificarToken,isAdmin} = require ('../helper/Auth2');

////////////////    CRUD    /////////////////////////
router.post('/crear',  ProductoCtrl.crear)
router.get('/listar', ProductoCtrl.listar)
router.put('/actualizar/:id',  ProductoCtrl.actualizar)
router.delete('/eliminar/:id', ProductoCtrl.eliminar) 
////////////    Busquedas   ////////////////////////
router.get('/buscarporid/:id', ProductoCtrl.buscarPorId)
router.get('/buscarpornombre/:nombre', ProductoCtrl.buscarPorNombre)
router.get('/buscarporcategoria/:categoria',  ProductoCtrl.buscarPorCategoria)

//[verificarToken, isAdmin],

module.exports = router