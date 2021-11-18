const {Router} =require ('express')
const router= Router()

const VendedorCtrl = require('../controllers/Vendedor.controller')

const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, VendedorCtrl.crear)
router.get('/listarVendedores', Auth.verificarToken, VendedorCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, VendedorCtrl.listarId)
router.get('/listarVendedoresJefe/:id', Auth.verificarToken, VendedorCtrl.Vendedorporjefe)
router.delete('/eliminar/:id', Auth.verificarToken, VendedorCtrl.eliminar) 
router.put('/actualizar/:id', Auth.verificarToken, VendedorCtrl.actualizar)

//Aqui usaremos el Auth
router.get('/buscar/:nombres', Auth.verificarToken, VendedorCtrl.buscarVendedor)


module.exports = router