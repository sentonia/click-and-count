import { PropTypes } from "prop-types";

export default function Count({ count }) {
  return <p className="count">{count}</p>;
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
};
