// Parent Component
import React, { useCallback, useState } from "react";
import Child from "./Child";

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Task"]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, "New Task"]);
  // };

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <div>-------------------------------</div>
      <Child todos={todos} addTodo={addTodo} />
    </>
  );
};

export default Callbackhook;
