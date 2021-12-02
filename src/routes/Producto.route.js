const {Router} =require ('express')

const router= Router()

const ProductoCtrl = require('../controllers/Producto.controller')

const Auth= require ('../helper/Auth');
const Auth2= require ('../helper/Auth2');

router.post('/crear', ProductoCtrl.crear)
router.get('/listarproductos', ProductoCtrl.listar)
router.put('/actualizar/:id',  ProductoCtrl.actualizar)
router.delete('/eliminar/:id', ProductoCtrl.eliminar) 
/////---------------------------------------------------------------
router.get('/buscarporid/:id', ProductoCtrl.buscarPorId)
router.get('/buscarpornombre/:nombre', ProductoCtrl.buscarPorNombre)
router.get('/buscarporcategoria/:categoria',  ProductoCtrl.buscarporCategoria)

//[Auth2.verificarToken, Auth2.isAdmin],

module.exports = router