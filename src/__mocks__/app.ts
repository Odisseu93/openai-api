import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config()
const port = process.env.PORT || 3000

const app = express()

// app.use(express.json())
// app.use(cors)

export { app, port }
