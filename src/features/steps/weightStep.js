import React from "react";
import PropTypes from "prop-types";
import { stepMapping } from "../../core/constants";

export default class StepThree extends React.Component {
  render() {
    const {
      onAction,
      wizardContext: { weight }
    } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h6>Enter Weight</h6>
        </div>
        <div className="row">
          <div className="six columns">
            <label>Weight</label>
            <input
              className="u-full-width"
              placeholder="Weight"
              data-id="weight"
              data-step={stepMapping.weight}
              type="number"
              onChange={onAction}
              value={weight}
              autoFocus
            />
          </div>
        </div>
      </div>
    );
  }
}

StepThree.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};
