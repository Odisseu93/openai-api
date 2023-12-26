import { Router } from 'express'
import { OpenaiController } from '../controllers/openai.controller'
import cors from 'src/libs/cors'

const router = Router()

router.post(
  '/generate/product-description',
  cors,
  OpenaiController.generateDescription
)

export { router }
