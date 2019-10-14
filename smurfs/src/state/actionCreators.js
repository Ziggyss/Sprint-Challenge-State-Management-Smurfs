import Axios from "axios";
import * as types from "./actionTypes";

export function setSmurfs(smurfs) {
  return {
    type: types.SET_SMURFS,
    payload: smurfs
  };
}

const smurfsApi = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  Axios.get(smurfsApi)
    .then(response => {
      const smurfs = response.data;
      dispatch(setSmurfs(smurfs));
    })
    .catch(error => {
      console.log(error.message);
    });
};

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
}

export const createSmurf = newSmurf => dispatch => {
  Axios.post(smurfsApi, newSmurf)
    .then(response => {
      dispatch({
        type: types.ADD_SMURF,
        payload: response.data
      });
      dispatch({
          type: types.ADD_SMURF_SUCCESS
      })
    })

    .catch(error => {
      console.log(error.message);
    });
};

export const deleteSmurf = id => dispatch => {
    Axios.delete(`smurfsApi/${id}`)
    .then(response => {
        dispatch({
            types: types.DELETE_SMURF,
            payload: response.data
        })
    })
    .catch(error => {
        console.log(error.message);
      });
}
