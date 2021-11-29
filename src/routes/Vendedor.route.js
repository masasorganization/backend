const {Router} =require ('express')
const router= Router()

const VendedorCtrl = require('../controllers/Vendedor.controller')

const Auth = require('../helper/Auth')

router.post('/crear', VendedorCtrl.crear)
router.get('/listarvendedores', VendedorCtrl.listar)
router.get('/buscarporid/:id', VendedorCtrl.buscarporId)
router.get('/listarvendedoresjefe/:id', VendedorCtrl.Vendedorporjefe)
router.delete('/eliminar/:id', VendedorCtrl.eliminar) 
router.put('/actualizar/:id', VendedorCtrl.actualizar)

//Aqui usaremos el Auth
router.get('/buscar/:nombres', Auth.verificarToken, VendedorCtrl.buscarVendedor)


module.exports = router