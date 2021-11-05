const {Router} = require('express')
const router = Router();
const AdministradorCtrl = require('../controllers/Administrador.controller')

router.post('/crear', AdministradorCtrl.crearAdministrador)

module.exports = router