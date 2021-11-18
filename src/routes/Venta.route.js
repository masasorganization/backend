const {Router} =require ('express')
const router= Router()

const VentaCtrl = require('../controllers/Venta.controller')

const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, VentaCtrl.crear)
router.get('/listarVentas', Auth.verificarToken, VentaCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, VentaCtrl.listarId)
router.get('/listarporCategoria/:id', Auth.verificarToken, VentaCtrl.porCategoria)
//router.delete('/eliminar/:id', Auth.verificarToken, VentaCtrl.eliminar) 
router.put('/actualizar/:id', Auth.verificarToken, VentaCtrl.actualizar)
router.get('/buscar/:nombres', Auth.verificarToken, VentaCtrl.buscarVenta)

module.exports = router