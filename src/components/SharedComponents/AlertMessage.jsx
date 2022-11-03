import React from "react";
import PropsTypes from "prop-types";

function AlertMessage({ children, type }) {
  return <p className={`message ${type}`}>{children}</p>;
}

AlertMessage.defaultProps = {
  type: "success",
};

AlertMessage.propsTypes = {
  children: PropsTypes.node.isRequired,
  type: PropsTypes.string.isRequired,
};

export default AlertMessage;
