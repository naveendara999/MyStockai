import React, { useState } from "react";
import { CloseButton } from "react-bootstrap";
import { Alert } from "reactstrap";

const AlertComponent = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss}>
      {props.message}
    </Alert>
  );
};

export default Alert;
