import React from "react";
import Wizard from "./core/components/wizard/Wizard";
import shippingObj from "./core/components/shippingObj";
import Header from "./core/components/Header";
import steps from "./features/steps/index";
import ShippingLabel from "./features/shipping-labels";

export default class ShippingLabelMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelReady: false,
      wizardContext: shippingObj
    };
    this.createLabel = this.createLabel.bind(this);
  }

  createLabel(val) {
    this.setState({
      labelReady: true,
      wizardContext: val
    });
  }
  render() {
    return (
      <div>
        {this.state.labelReady ? (
          <ShippingLabel info={this.state.wizardContext} />
        ) : (
          <Wizard
            header={Header}
            steps={steps}
            wizardContext={this.state.wizardContext}
            onComplete={this.createLabel}
          />
        )}
      </div>
    );
  }
}
