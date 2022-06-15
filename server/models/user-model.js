import pkg from 'mongoose'
const { Schema, model } = pkg

const userSchema = new Schema({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	isActivated: { type: Boolean, default: false },
	activationLink: { type: String },
})

export default model('User', userSchema)