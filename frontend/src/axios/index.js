import axios from "axios";
export default axios.create({
	baseURL: 'https://dotoxygen.com/',
	headers:{
		"Content-Type": "multipart/form-data"
	}
});