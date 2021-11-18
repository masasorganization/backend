const {Router} = require('express')
const router = Router();
const VendedorCtrl = require('../controllers/Vendedor.controller')

router.post('/crear', VendedorCtrl.crearVendedor)

module.exports = router