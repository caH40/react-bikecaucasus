export function validateUsername(register) {
	return {
		...register('username', {
			required: 'Это обязательное поле для заполнения',
			minLength: { value: 5, message: 'Username должен быть больше 4х символов' },
			maxLength: { value: 15, message: 'Username не может быть больше 15 символов' },
		}),
	}
}

export function validateEmail(register) {
	return {
		...register('email', {
			required: 'Это обязательное поле для заполнения',
			pattern: {
				value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				message: 'Некорректный email',
			},
		}),
	}
}

export function validatePassword(register) {
	return {
		...register('password', {
			required: 'Это обязательное поле для заполнения',
			minLength: { value: 6, message: 'Password должен быть больше 5ти символов' },
			maxLength: { value: 15, message: 'Password не может быть больше 15 символов' },
		}),
	}
}
