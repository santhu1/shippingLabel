import React, { useState } from "react";
import { getshippingOption, getShippingRate } from "../core/utils";
import Address from "./Address";

const ShippingLabel = props => {
  let [shipInfo] = useState(props.info);

  return (
    <section className="shippinglabel">
      <h6>Final Label</h6>
      <div className="info">
        <span className="block">
          {getshippingOption(shipInfo.shippingOption)} Shipping
        </span>
        <span className="block">
          {" "}
          ${getShippingRate(shipInfo.weight, shipInfo.shippingOption)} Shipping
          Cost{" "}
        </span>
      </div>
      <Address shipInfo={shipInfo.from} label="from" />
      <Address shipInfo={shipInfo.to} label="to" />
    </section>
  );
};
export default ShippingLabel;
