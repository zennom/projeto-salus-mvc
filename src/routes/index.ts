import { Router } from 'express'
import * as PageController from '../controllers/pageController'

const router = Router()

router.get('/',PageController.home)
router.get('/info',PageController.info)
router.get('/testes',PageController.testes)
router.get('/comunidade',PageController.comunidade)
router.get('/sobre',PageController.sobre)
router.get('/login',PageController.login)
router.get('/cadastro',PageController.cadastro)


export default router
