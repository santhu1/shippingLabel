import React from "react";
import PropTypes from "prop-types";
import { stepMapping, shippingOptionObj } from "../../core/constants";

export default class StepFour extends React.Component {
  render() {
    const {
      onAction,
      wizardContext: { shippingOption }
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h6>Enter shipping option.</h6>
        </div>

        <div className="row">
          <div className="six columns">
            <label>Shipping</label>
            <select
              onChange={onAction}
              value={shippingOption}
              data-id="shippingOption"
              data-step={stepMapping.shipping}
            >
              <option value={shippingOptionObj.ground}>Ground</option>
              <option value={shippingOptionObj.priority}>Express</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

StepFour.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};
