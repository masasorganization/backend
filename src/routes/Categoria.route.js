const {Router} =require ('express')
const router= Router()

const CategoriaCtrl = require('../controllers/Categoria.controller')

const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, CategoriaCtrl.crear)
router.get('/listarCategorias', Auth.verificarToken, CategoriaCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, CategoriaCtrl.listarId)
router.delete('/eliminar/:id', Auth.verificarToken, CategoriaCtrl.eliminar) 
router.put('/actualizar/:id', Auth.verificarToken, CategoriaCtrl.actualizar)
router.get('/buscar/:nombre', Auth.verificarToken, CategoriaCtrl.buscarCategoria)

module.exports = router