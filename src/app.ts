import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

import { router } from './routes'

config()

const port = process.env.PORT || 3000

const app = express()

app.use(cors)

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.use('/', router)

app.listen(port, () => console.log('listen on port' + port))
