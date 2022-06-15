import mongoose from 'mongoose'
import pkg from 'mongoose'
const { Schema, model } = pkg

const tokenSchema = new Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	refreshToken: { type: String, required: true },
})

export default model('Token', tokenSchema)
