class ApiError extends Error {
	status
	errors

	constructor(status, message, errors = []) {
		//вызов родительского конструктора с помощью super
		super(message)
		this.status = status
		this.errors = errors
	}
	//static функции это функции которые можно использовать не создавая экземпляр класса
	static UnauthorizedError() {
		return new ApiError(401, 'Пользователь не авторизован')
	}
	static BadRequest(message, errors = []) {
		return new ApiError(400, message, errors)
	}
}

export default ApiError
