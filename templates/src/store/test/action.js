// import { GetTest } from "../../api/test"

export const FETCH_TEST = 'FETCH_TEST'
const data = [1,2,3]
export const SetTest = () => {
  // return (dispatch) => {
  //   GetTest().then( (data) => {
  //     if (data.data && data.data.length > 0) {
  //       dispatch({type: FETCH_TEST, payload: data.data})
  //     }
  //   })
  // }
  return (dispatch) => {
    dispatch({type: FETCH_TEST, payload: data})
  }
}