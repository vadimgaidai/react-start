import { GetTest } from "../../api/test"

export const FETCH_TEST = 'FETCH_TEST'
// const data = [1,2,3]


export const SetTest = () => {
  return (dispatch) => {
    GetTest().then( (data) => {
      if (data.data && data.data.length > 0) {
        dispatch({type: FETCH_TEST, payload: data.data})
      }
    })
  }

  // return {
  //   type: FETCH_TEST,
  //   payload: GetTest().then( (data) => {
  //         if (data.data && data.data.length > 0) {
  //           console.log(data.data)
  //           return data.data
  //         }
  //       })
  // }
  
  // return {
  //   type: FETCH_TEST,
  //   payload: data.data
  // }
}