import React from "react";


export default function SmurfCard({ smurf }) {
  return (
    <div>
      <h4>Smurf Details</h4>
      <p>Name: {smurf.name}</p>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </div>
  );
}
