import { FETCH } from "../fetch"
const INIT = {
	method: 'GET',
	mode: 'cors'
}
export function GetTest() {
	return FETCH(
		'./test.json',
		INIT
	)
}
// 'https://reqres.in/api/users'