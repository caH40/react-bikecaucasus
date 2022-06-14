export default async function() {
	try {
		let response = await fetch('https://bike-caucasus.ru/main/screenshot', {
			headers: {
				authorization: localStorage.getItem('tokenBikeCaucasus'),
			},
		})

		const imgBlob = await response.blob()
		return URL.createObjectURL(imgBlob)
	} catch (error) {
		console.log(error)
	}
}

//Модуль загрузки файла jpg с сервера. Он формируется автоматически на сервере, делая скриншоты с сайта вебкамеры
