import React from "react";

const hidden = {
  display: "none"
};
const Navigation = props => (
  <div style={props.show ? {} : hidden}>
    <button
      type="button"
      style={props.showPrev ? {} : hidden}
      className="btn btn-secondary btn-lg"
      onClick={props.prev}
    >
      Previous
    </button>

    <button
      type="button"
      style={props.showNext ? {} : hidden}
      className="btn btn-primary btn-lg"
      onClick={props.next}
    >
      Next
    </button>
  </div>
);

export default Navigation;
