import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from 'styled-components';

const StyledList = styled.div`
display: flex;
justify-content: center;


`;

const smurfsApi = "http://localhost:3333/smurfs";

export function SmurfList({ smurfs, getSmurfs }) {
  useEffect(() => {
    getSmurfs(smurfsApi);
  }, []);
  return (
    <StyledList className="smurfList">
      {smurfs.map(smurf => (
        <SmurfCard smurf={smurf} key={smurf.id} />
      ))}
    </StyledList>
  );
}

export default connect(
  state => state,
  actionCreators
)(SmurfList);
