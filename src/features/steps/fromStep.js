import React from "react";
import PropTypes from "prop-types";
import { stepMapping } from "../../core/constants";

export default class StepOne extends React.Component {
  render() {
    const {
      onAction,
      wizardContext: { from }
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h6>Enter From Address</h6>
        </div>
        <div className="row">
          <div className="six columns">
            <label>Name</label>
            <input
              className="u-full-width"
              placeholder="Name"
              data-id="name"
              data-step={stepMapping.from}
              type="text"
              onChange={onAction}
              value={from.name}
              autoFocus
            />
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label>Street</label>
            <input
              className="u-full-width"
              placeholder="Street"
              data-id="street"
              data-step={stepMapping.from}
              type="text"
              onChange={onAction}
              value={from.street}
            />
          </div>
        </div>
        <div className="row columns">
          <label>City</label>
          <input
            className="small"
            placeholder="City"
            data-id="city"
            data-step={stepMapping.from}
            type="text"
            onChange={onAction}
            value={from.city}
          />
          <label>State </label>
          <input
            className="small"
            placeholder="state"
            data-id="state"
            data-step={stepMapping.from}
            type="text"
            onChange={onAction}
            value={from.state}
          />
          <label>Zip</label>
          <input
            className="small"
            placeholder="zip"
            data-id="zip"
            data-step={stepMapping.from}
            type="text"
            onChange={onAction}
            value={from.zip}
          />
        </div>
      </div>
    );
  }
}

StepOne.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};
