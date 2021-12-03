const {Router} = require ('express');

const router= Router();

//Llamando el controlador
const JefeCtrl = require ('../controllers/Jefe.controller');

const {verificarToken,isAdmin} = require ('../helper/Auth2');

//Generando la ruta, llamando la const que relaciona el controlador
//////////////////  LOGIN   ///////////////////////
router.post('/login', JefeCtrl.login)

////////////////    CRUD    /////////////////////////
router.post('/crear',  JefeCtrl.crear)
router.get('/listarvendedores', JefeCtrl.listar)
router.put('/actualizar/:id',  JefeCtrl.actualizar)
router.delete('/eliminar/:id', JefeCtrl.eliminar) 
////////////    Busquedas   ////////////////////////
router.get('/buscarporid/:id', JefeCtrl.buscarPorId)
router.get('/buscarpornombres/:nombres', JefeCtrl.buscarPorNombres)

//[verificarToken, isAdmin],

module.exports = router;