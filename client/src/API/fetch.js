export async function fetchGet(url, bodyObj) {
	try {
		const dataFromDb = await fetch(`https://bike-caucasus.ru${url}`, {
			headers: {
				'Content-Type': 'application/json',
				authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzRiMzkyNjczNTc5ZGRhMWFhMmQ0MiIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE2NTQ3MDQ5MzcsImV4cCI6MTY1NDc5MTMzN30.Pb7TDy0omdbIAdkdj_rw9UKxWcH9SMjukZQsHLAmldU',
			},
			body: JSON.stringify(bodyObj),
		}).then(data => data.json())
		return dataFromDb
	} catch (error) {
		console.log(error)
	}
}
