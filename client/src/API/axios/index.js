import axios from 'axios'

const API_URL = 'http://localhost:5000'

const instance = axios.create({
	//что бы куки цеплялись автоматически??
	// withCredentials: true,
	baseURL: API_URL,
})

// instance.interceptors.request.use(config => {
// 	// config.headers.Authorization =
// 	// 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imttdl9iYXZAbWFpbC5ydSIsImlkIjoiNjJhYjUwOWNiMjdkYzZiODQxZmFjZTZjIiwiaXNBY3RpdmF0ZWQiOnRydWUsImlhdCI6MTY1NTcxMDIxOSwiZXhwIjoxNjU1NzEwMjQ5fQ.a1ddHXORW5TxhK88Aho1Ppet1p2Zx9GYcqjvIXmpIjY'
// 	// config.headers.Authorization = ` Bearer ${localStorage.getItem('tokenBikeCaucasus')}`
// 	return config
// })

export default instance
