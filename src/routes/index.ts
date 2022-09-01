import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/',PageController.home)
router.get('/info',PageController.info)
router.get('/testes',PageController.testes)
router.get('/comunidade',PageController.comunidade)
router.get('/sobre',PageController.sobre)
router.get('/login',PageController.login)
router.get('/cadastro',PageController.cadastro)

//criando unidade
router.post('/unidades',apiController.criarUnidade)
//visualizando todas as unidades
router.get('/unidades',apiController.listarUnidades)
//visualizando uma unidade
router.get('/unidade/:id',apiController.pegarUnidade)

export default router
