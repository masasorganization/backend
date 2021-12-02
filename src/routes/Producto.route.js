const {Router} =require ('express')
const router= Router()

const ProductoCtrl = require('../controllers/Producto.controller')

const Auth= require ('../helper/Auth');
const Auth2= require ('../helper/Auth2');

router.post('/crear', [Auth2.verificarToken, Auth2.isAdmin],  ProductoCtrl.crear)
router.get('/listarProductos', [Auth2.verificarToken, Auth2.isAdmin], ProductoCtrl.listar)
router.put('/actualizar/:id', [Auth2.verificarToken, Auth2.isAdmin], ProductoCtrl.actualizar)
router.delete('/eliminar/:id', [Auth2.verificarToken, Auth2.isAdmin], ProductoCtrl.eliminar) 
/////---------------------------------------------------------------
router.get('/listar/:id', ProductoCtrl.buscarPorId)
router.get('/buscarpornombre/:nombre', [Auth2.verificarToken, Auth2.isAdmin], ProductoCtrl.buscarPorNombre)
router.get('/buscarporcategoria/:categoria', [Auth2.verificarToken, Auth2.isAdmin], ProductoCtrl.buscarporCategoria)

module.exports = router