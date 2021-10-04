import express, { Response, Request } from 'express'
import { config } from 'dotenv'

import Bot from './bot'

config()

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Bot on!')
})

app.listen(process.env.PORT, () => {
  console.log('Server running')
})

Bot
