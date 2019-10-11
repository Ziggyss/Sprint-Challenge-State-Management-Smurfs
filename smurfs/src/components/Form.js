import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
// import { actions } from "react-redux-form";
import styled from "styled-components";

const StyledForm = styled.form`
  border: black 1px solid;
  border-radius: 10px;
  width: 200px;
  margin: 60px auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  
`;

const StyledInput = styled.input`
width: 100px;
font-size: 20px;
background-color: blue;
color: white;
border-radius: 5px;
`;

export function Form({ formValues, changeInput, createSmurf }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

  //   const initialFormState = {
  //     name: "",
  //     age: "",
  //     height: ""
  //   };

  const onFormSubmit = event => {
    event.preventDefault();
    createSmurf(formValues);
    // actions.reset(initialFormState);
  };
  //I spent a huge amount of time trying to get the form to clear after submit but never managed to get it to work. There seem to be several ways to do it and I wasn't doing any of them right...

  return (
    <StyledForm className="component" onSubmit={onFormSubmit}>
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

      <StyledInput type="submit" />
    </StyledForm>
  );
}

export default connect(
  state => state,
  actionCreators
)(Form);
