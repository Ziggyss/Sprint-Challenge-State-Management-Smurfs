import Axios from 'axios';
import * as types from './actionTypes';


const smurfsApi = "http://localhost:3333/smurfs";

export const createSmurf = ({ name, age, height }) => {
  return dispatch => {
    return Axios.post(smurfsApi, { name, age, height })
      .then(response => {
        dispatch(createSmurfSuccess(response.data));
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};

export const createSmurfSuccess = data => {
  return {
    type: types.ADD_SMURF,
    payload: {
      name: data.name,
      age: data.age,
      height: data.height
    }
  };
};

export function fetchSmurfs(smurfs){
    return {
        type: types.FETCH_SMURFS,
        payload: smurfs,
    }
};

export const getSmurfs = () => dispatch => {
    Axios.get(smurfsApi)
    .then(response => {
        const smurfs = response.data
        dispatch(fetchSmurfs(smurfs));

    })
    .catch(error => {
        console.log("Uh oh - there's an error with the Api!", error.message)
    })
};

export function changeInput(target) {
    return {
      type: types.ON_INPUT_CHANGE,
      payload: {
        name: target.name,
        value: target.value,
      },
    };
  }


