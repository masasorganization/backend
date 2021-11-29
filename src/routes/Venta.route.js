const {Router} =require ('express')
const router= Router()

const VentaCtrl = require('../controllers/Venta.controller')

const Auth = require('../helper/Auth')

router.post('/crear', VentaCtrl.crear)
router.get('/listarVentas', VentaCtrl.listar)
router.get('/listar/:id', VentaCtrl.listarId)
router.get('/listarporCategoria/:categoria', VentaCtrl.porCategoria)
//router.delete('/eliminar/:id', VentaCtrl.eliminar) 
router.put('/actualizar/:id', VentaCtrl.actualizar)
router.get('/buscar/:nombres', VentaCtrl.buscarVenta)

module.exports = router