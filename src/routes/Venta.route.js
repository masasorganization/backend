const {Router} = require ('express')
const router= Router()

const VentaCtrl = require('../controllers/Venta.controller')

const {verificarToken,isAdmin} = require ('../helper/Auth2');

////////////////    CRUD    /////////////////////////
router.post('/crear', VentaCtrl.crear)
router.get('/listar', VentaCtrl.listar)
router.put('/actualizar/:id', VentaCtrl.actualizar)
router.delete('/eliminar/:id', VentaCtrl.eliminar) 
////////////    Busquedas   ////////////////////////
router.get('/buscarporid/:id', VentaCtrl.buscarPorId)
router.get('/buscarpornombre/:nombres', VentaCtrl.buscarPorNombre)
router.get('/buscarporcategoria/:categoria', VentaCtrl.buscarPorCategoria)

//[verificarToken, isAdmin],

module.exports = router