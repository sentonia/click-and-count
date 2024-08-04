import { PropTypes } from "prop-types";

export default function ButtonContainer({ children }) {
  return <div className="button-container">{children}</div>;
}

ButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
