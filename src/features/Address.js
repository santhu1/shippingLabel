import React from "react";

const Address = props => {
  return (
    <div>
      <label> {props.label} </label>
      <div className={props.label}>
        <span className="block">{props.shipInfo.name}</span>
        <span className="block">{props.shipInfo.street}</span>
        <span className="block">
          {props.shipInfo.city}, {props.shipInfo.state} {props.shipInfo.zip}{" "}
        </span>
      </div>
    </div>
  );
};

export default Address;
