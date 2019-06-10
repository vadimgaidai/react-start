import { GetTest } from "../../api/test"

export const FETCH_TEST = 'FETCH_TEST'
// const data = [1,2,3]


export const SetTest = () => {
  return (dispatch) => {
    async GetTest().then( (data) => {
      if (data.data && data.data.length > 0) {
        await dispatch({type: FETCH_TEST, payload: data.data})
      }
    })
  }
  
  // return {
  //   type: FETCH_TEST,
  //   payload: data.data
  // }
  // return {
  //   type: FETCH_TEST,
  //   payload: data
  // }
}