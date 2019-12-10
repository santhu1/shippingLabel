import React, { useState } from "react";
import { getshippingOption, getShippingRate } from "../core/utils";

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
      <div className="from">
        <span className="block">{shipInfo.from.name}</span>
        <span className="block">{shipInfo.from.street}</span>
        <span className="block">
          {shipInfo.from.city}, {shipInfo.from.state} {shipInfo.from.zip}{" "}
        </span>
      </div>
      <div className="to">
        <span className="block">{shipInfo.to.name}</span>
        <span className="block">{shipInfo.to.street}</span>
        <span className="block">
          {shipInfo.to.city}, {shipInfo.to.state} {shipInfo.to.zip}
        </span>
      </div>
      <div> </div>
    </section>
  );
};
export default ShippingLabel;
