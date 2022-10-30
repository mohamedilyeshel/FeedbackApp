import PropsTypes from "prop-types";

function Card({ children, reverse }) {
  return <div className={"card " + (reverse && "reverse")}>{children}</div>;
}

Card.PropsTypes = {
  children: PropsTypes.node.isRequired,
  reverse: PropsTypes.bool.isRequired,
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
