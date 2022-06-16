import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middlewares/error-middleware.js'

import router from './router/index.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
//подключаемые свои мидлверы должны быть последними в списке
app.use(errorMiddleware)

const start = async () => {
	try {
		await mongoose.connect(process.env.MONGODB)
		app.listen(PORT, () => console.log('server started on PORT=' + PORT))
	} catch (error) {
		console.log(error)
	}
}

start()
