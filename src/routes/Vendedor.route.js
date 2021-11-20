const {Router} =require ('express')
const router= Router()

const VendedorCtrl = require('../controllers/Vendedor.controller')

const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, VendedorCtrl.crear)
router.get('/listarvendedores', Auth.verificarToken, VendedorCtrl.listar)
router.get('/buscarporid/:id', Auth.verificarToken, VendedorCtrl.buscarporId)
router.get('/listarvendedoresjefe/:id', Auth.verificarToken, VendedorCtrl.Vendedorporjefe)
router.delete('/eliminar/:id', Auth.verificarToken, VendedorCtrl.eliminar) 
router.put('/actualizar/:id', Auth.verificarToken, VendedorCtrl.actualizar)

//Aqui usaremos el Auth
router.get('/buscar/:nombres', Auth.verificarToken, VendedorCtrl.buscarVendedor)


module.exports = router