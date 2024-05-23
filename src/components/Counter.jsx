import React, { useState } from "react";
import CounterPrint from "./CounterPrint";

const Counter = () => {
  const [initvalue, setInitvalue] = useState(10);

  const callBack = (number) => {
    setInitvalue(number);
  };

  return (
    <div className="mt-5 mb-5" style={{ textAlign: "center" }}>
      <div>{initvalue}</div>
      <CounterPrint value={initvalue} callBack={callBack} />
    </div>
  );
};

export default Counter;
