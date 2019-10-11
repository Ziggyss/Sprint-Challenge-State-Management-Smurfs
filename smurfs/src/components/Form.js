import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import {reset} from 'redux-form';

export function Form({ formValues, changeInput, createSmurf, dispatch }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

 
  const onFormSubmit = event => {
    event.preventDefault();
    createSmurf(formValues);
    // dispatch(reset(Form));
  };

  return (
    <form className="component" onSubmit={onFormSubmit} dispatch={dispatch}>
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
