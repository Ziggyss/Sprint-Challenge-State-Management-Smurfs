import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
border: black solid 2px;
border-radius: 5px;
width: 200px;
padding: 5px;
margin: 5px;

`;

export default function SmurfCard({ smurf }) {
  return (
    <StyledCard>
      <h4>Smurf Details</h4>
      <p>Name: {smurf.name}</p>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </StyledCard>
  );
}
