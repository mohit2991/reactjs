import React, { useState, useEffect } from "react";

const CounterPrint = (Props) => {
  const { value, callBack } = Props;
  const [number, setNumber] = useState(value);

  const increment = () => {
    // set numner value
    setNumber(number + 1);
  };

  useEffect(() => {
    // Call back function and pass nunber state as argument
    callBack(number);
  }, [number]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterPrint;
