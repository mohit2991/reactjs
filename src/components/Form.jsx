import React, { useState } from "react";

const Form = (Props) => {
  const { buttonTitle = "Buton" } = Props;

  const [input, setinput] = useState("");

  const handleInput = (e) => {
    setinput(e.target.value);
  };

  return (
    <div className="mt-5 mb-5">
      <form action="">
        <input type="text" placeholder="Input" onChange={handleInput} />
        {buttonTitle === "Send" ? (
          <input type="text" placeholder="Input" onChange={handleInput} />
        ) : null}
        <button>{buttonTitle}</button>
      </form>
    </div>
  );
};

export default Form;
