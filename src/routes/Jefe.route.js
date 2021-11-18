const {Router} = require ('express')

const router= Router();

//Llamando el controlador
const JefeCtrl = require ('../controllers/Jefe.controller');

//Generando la ruta, llamando la const que relaciona el controlador
router.post('/crear',  JefeCtrl.crearJefe);

router.post('/login', JefeCtrl.login)

module.exports=router;