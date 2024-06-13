// child compnent - Todos
import React, { memo } from "react";

const Child = ({ todos, addTodo }) => {
  console.log("Child Componet");
  return (
    <>
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map((item, index) => {
          return <p>{item + index}</p>;
        })}
      </div>
    </>
  );
};

export default memo(Child);
