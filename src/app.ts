import express, { Request, Response } from 'express'
import { config } from 'dotenv'

config()

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req: Request, res: Response) => res.send('Hello!'))

app.listen(port, () => console.log('listen on http://localhost:' + port))
