import { Router } from 'express'
import { OpenaiController } from '../controllers/openai.controller'

const router = Router()

router.post('/', OpenaiController.generateDescription)

export { router }
