// import axios from 'axios';
import * as types from './actionTypes';

// const smurfsApi = "http://localhost:3333/smurfs";

// export function addSmurfs(smurfs){
//     return {
//         type: types.ADD_SMURFS,
//         payload: smurfs,
//     }
// };

// export function getSmurfs = () => dispatch => {
//     axios.get(smurfsApi)
//     .then(response => {
//         const smurfs = response.data
//         dispatch(addSmurfs(smurfs));

//     })
//     .catch(error => {
//         console.log("Uh oh - there's an error with the Api!", error.message)
//     })
// };
export function increment() {
    return { type: types.INCREMENT };
  }
  
  export function decrement() {
    return { type: types.DECREMENT };
  }

