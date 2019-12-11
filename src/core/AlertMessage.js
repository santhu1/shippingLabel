import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { alertMessageCons } from "../core/constants";

const AlertMessage = props => {
  const [show, setShow] = useState(true);

  return show ? (
    <Alert
      show="true"
      variant={props.successful ? "success" : "danger"}
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>{alertMessageCons[props.message].heading}</Alert.Heading>
      <p>{alertMessageCons[props.message].message}</p>
    </Alert>
  ) : null;
};

export default AlertMessage;
