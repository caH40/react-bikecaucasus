import pkg from 'mongoose'
const { Schema, model } = pkg

const userSchema = new Schema({
	login: { type: String, unique: true, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	isActivated: { type: Boolean, default: false },
	activationToken: { type: String },
})

export default model('User', userSchema)
