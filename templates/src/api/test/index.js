import { FETCH } from "../fetch"
const INIT = {
	method: 'GET',
	mode: 'cors'
}
export function GetTest() {
	return FETCH(
		'https://reqres.in/api/users',
		INIT
	)
}
// 'https://reqres.in/api/users'