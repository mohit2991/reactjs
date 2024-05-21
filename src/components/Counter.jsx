import React, { useState, useEffect, useMemo } from "react";
import CounterPrint from "./CounterPrint";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = (Props) => {
  // const { value } = Props;
  // State/Props- Hook
  const [number, setNumber] = useState(0);
  // const [array, setArray] = useState([]);

  // useEffect(() => {
  //   console.log(">>>>> mohit componentDidMount()");
  // }, []);

  // useEffect(() => {
  //   if (number !== 0) {
  //     console.log(">>>>> mohit componentDidUpdate()");
  //   }
  // }, [number, number1]);

  // useMemo(() => {
  //   if (number !== 0) {
  //     console.log(">>>>> mohit componentWillUpdate()");
  //   }
  // }, [number]);

  useEffect(function () {
    setNumber(number + 90);
  }, []);

  const increment = () => {
    setNumber(number + 1);
  };

  // const decrement = () => {
  //   setNumber(number - 1);
  // };

  return (
    <>
      {console.log(">>>>> mohit render()")}
      <div className="mt-5 mb-5" style={{ textAlign: "center" }}>
        <CounterPrint number={number} />
        <button onClick={increment} className="mt-4">
          Incement
        </button>
      </div>
    </>
  );
};

export default Counter;
