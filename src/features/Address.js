import React from "react";

const Address = props => {
  return (
    <div className="container">
      <label> {props.label} </label>
      <div className={props.label}>
        <div className="block">{props.shipInfo.name}</div>
        <span className="block">{props.shipInfo.street}</span>
        <div className="block">
          {props.shipInfo.city}, {props.shipInfo.state} {props.shipInfo.zip}{" "}
        </div>
      </div>
    </div>
  );
};

export default Address;
