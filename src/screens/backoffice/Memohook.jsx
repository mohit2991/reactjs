import React, { useState, useMemo } from "react";

const Memohook = () => {
  const [counter, setCounter] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const getValue = () => {
    return setCounter(counter + 1);
  };

  const countNumer = (counter) => {
    console.log("Counter function");

    for (let index = 0; index < 100000000; index++) {}

    return counter;
  };

  const counterData = useMemo(() => {
    return countNumer(counter);
  }, [counter]);

  // const counterData = countNumer(counter);

  // on click tiggle button
  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <>
      <div>{counterData}</div>
      <button onClick={getValue}>Counter</button>
      <br />
      <button onClick={handleClick}>
        {isButtonClicked ? "You clicked me" : "Click Me"}
      </button>
    </>
  );
};

export default Memohook;
