import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";


const smurfsApi = "http://localhost:3333/smurfs";

export function SmurfList({ smurfs, getSmurfs }) {
  useEffect(() => {
    getSmurfs(smurfsApi);
  },[]);
  return (
    <div className="smurfList">
      {smurfs.map(smurf => (
        <SmurfCard smurf={smurf} key={smurf.id} />
      ))}
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(SmurfList);