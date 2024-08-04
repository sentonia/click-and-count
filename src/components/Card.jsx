import Count from "./Count";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonsContainer";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count >= 5 ? true : false;

  // Add event listener to increase count with spacebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener when component unmounts or count changes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : " "}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="decrease" setCount={setCount} locked={locked} />
        <CountButton type="increase" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
