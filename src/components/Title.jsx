import PropTypes from "prop-types";

const defaultTitle = "Count Controller";
const lockedTitle = (
  <span>
    Limit! BUY <b>Pro</b> for&gt;5
  </span>
);

export default function Title({ locked }) {
  // Set title based on locked state
  const title = locked ? lockedTitle : defaultTitle;

  return <h1 className="title">{title}</h1>;
}

Title.propTypes = {
  locked: PropTypes.bool.isRequired,
};
