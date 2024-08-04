import { ResetIcon } from "@radix-ui/react-icons";
import { PropTypes } from "prop-types";

export default function ResetButton({ setCount }) {
  const handleClickReset = (e) => {
    setCount(0);
    e.currentTarget.blur();
  };

  return (
    <button className="reset-btn" onClick={handleClickReset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

ResetButton.propTypes = {
  setCount: PropTypes.func.isRequired,
};
