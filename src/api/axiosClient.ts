import axios from "axios"

const jsonServerAxios = axios.create({
	// baseURL: "https://official-joke-api.appspot.com/jokes",

	baseURL: "https://663136c1c92f351c03dc8255.mockapi.io/joke",

	headers: {
		"Content-Type": "application/json",
	},
})

export default jsonServerAxios
