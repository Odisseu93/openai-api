import Cors from 'cors'

const allowedOrigins = [process.env.WEB_URL] as string[]

const options: Cors.CorsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
}

const cors = Cors(options)

export default cors
