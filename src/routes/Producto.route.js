const {Router} =require ('express')
const router= Router()

const ProductoCtrl = require('../controllers/Producto.controller')

const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, ProductoCtrl.crear)
router.get('/listarProductos', Auth.verificarToken, ProductoCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, ProductoCtrl.listarId)
router.delete('/eliminar/:id', Auth.verificarToken, ProductoCtrl.eliminar) 
router.put('/actualizar/:id', Auth.verificarToken, ProductoCtrl.actualizar)
router.get('/buscar/:nombre', Auth.verificarToken, ProductoCtrl.buscarProducto)
router.get('/buscarporCategoria/:categoria', Auth.verificarToken, ProductoCtrl.buscarporCategoria)

module.exports = router