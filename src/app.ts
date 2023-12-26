import express, { Request, Response } from 'express'
import { config } from 'dotenv'

import { router } from './routes'

config()

const port = process.env.PORT || 3000

const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.use('/', router)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to OpenAi API!',
    repository: 'https://github.com/Odisseu93/openai-api',
  })
})

app.listen(port, () => console.log('listen on port', port))
