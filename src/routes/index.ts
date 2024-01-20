import { Router } from 'express'
import { OpenaiController } from '../controllers/openai.controller'

const router = Router()

router.post(
  '/generate/product-description',
  OpenaiController.generateDescription
)

router.post('/generate/image', OpenaiController.generateImage)

export { router }
