import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api.thecatapi.com/v1',
	headers: {
		'x-api-key': 'e7a9546e-5968-4fab-af93-6f3f8837ebca',
	},
})

export default api
