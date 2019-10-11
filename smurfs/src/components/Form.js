import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Axios from "axios";
import { ADD_SMURF } from "../state/actionTypes";

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
    type: ADD_SMURF,
    payload: {
      name: data.name,
      age: data.age,
      height: data.height
    }
  };
};

export function Form({ formValues, changeInput }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    alert(
      `submitting ${formValues.name}, ${formValues.age}, ${formValues.height}`
    );
    createSmurf(formValues);
  };

  return (
    <form className="component" onSubmit={onFormSubmit}>
      <h3>Add a Smurf!</h3>
      <label>
        Name:
        <input value={formValues.name} onChange={onValueChange} name="name" />
      </label>
      <br />

      <label>
        Age:
        <input value={formValues.age} onChange={onValueChange} name="age" />
      </label>
      <br />

      <label>
        Height:
        <input
          value={formValues.height}
          onChange={onValueChange}
          name="height"
        />
      </label>
      <br />

      <input type="submit" />
    </form>
  );
}

export default connect(
  state => state,
  actionCreators
)(Form);
