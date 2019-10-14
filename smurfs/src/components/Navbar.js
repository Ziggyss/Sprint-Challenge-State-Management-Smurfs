import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  background-color: black;
  color: white;
  height: 80px;
  font-size: 30px;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <h1>The Smurf Village App</h1>
    </StyledNav>
  );
}
