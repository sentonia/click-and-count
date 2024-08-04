import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { PropTypes } from "prop-types";

const getControllerLogic = (prevCount, type) => {
  if (type === "decrease") {
    const newCount = prevCount - 1;
    if (newCount < 0) {
      return 0;
    }
    return newCount;
  } else {
    const newCount = prevCount + 1;
    if (newCount > 5) {
      return 5;
    }
    return newCount;
  }
};

export default function CountButton({ setCount, type, locked }) {
  const handleClickControllers = (e) => {
    setCount((prevCount) => {
      // Call function to get new count based on type
      return getControllerLogic(prevCount, type);
    });
    // Remove focus from button after click
    e.currentTarget.blur();
  };

  return (
    <button className="count-btn" onClick={handleClickControllers} disabled={locked}>
      {type === "increase" && <PlusIcon className="count-btn-icon" />}
      {type === "decrease" && <MinusIcon className="count-btn-icon" />}
    </button>
  );
}

CountButton.propTypes = {
  setCount: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["increase", "decrease"]).isRequired,
  locked: PropTypes.bool,
};
