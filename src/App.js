import React, { useState } from "react";
import Wizard from "./core/components/wizard/Wizard";
import shippingObj from "./core/components/shippingObj";
import Header from "./core/components/Header";
import steps from "./features/steps/index";
import ShippingLabel from "./features/shipping-labels";

const ShippingLabelMaker = () => {
  let [labelInfo, setLabelInfo] = useState({
    labelReady: false,
    wizardContext: shippingObj
  });

  return (
    <div>
      {labelInfo.labelReady ? (
        <ShippingLabel info={labelInfo.wizardContext} />
      ) : (
        <Wizard
          header={Header}
          steps={steps}
          wizardContext={labelInfo.wizardContext}
          onComplete={val =>
            setLabelInfo({ labelReady: true, wizardContext: val })
          }
        />
      )}
    </div>
  );
};
export default ShippingLabelMaker;
