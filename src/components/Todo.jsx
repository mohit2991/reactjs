import React, { useState } from "react";

const Todo = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [item, setItem] = useState("");
  const [array, setArray] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    let isDisabled = true;
    if (value !== "") {
      isDisabled = false;
    }

    // set input value
    setItem(value);
    setIsButtonDisabled(isDisabled);
  };

  const addEditItem = () => {
    const arrayItem = [...array];

    if (isEdit) {
      arrayItem[editIndex] = item;
      setIsEdit(false);
    } else {
      arrayItem.push(item);
    }

    setArray(arrayItem);

    // clear inpput value
    setItem("");
  };

  const deleteNode = (index) => {
    const arrayItem = [...array]; // Shallow Copy (... => spread operator)
    arrayItem.splice(index, 1);
    setArray(arrayItem);
  };

  const editNode = (index) => {
    const arrayItem = array[index];
    console.log(">>>>>>>> arrayItem", arrayItem);

    setItem(arrayItem);
    setEditIndex(index);
    setIsEdit(true);
  };

  return (
    <div className="mt-2 ms-2 mb-2">
      {/* <form className="mt-2 ms-2"> */}
      <input type="text" id="item" value={item} onChange={handleChange} />
      <button disabled={isButtonDisabled} onClick={() => addEditItem()}>
        {isEdit ? "Update" : "Submit"}
      </button>
      {/* </form> */}
      <table>
        <tr>
          <h>S.no</h>
          <th>Task</th>
          <th colSpan={2}>Action</th>
        </tr>
        {array.length === 0 && <tr>No Task Found!</tr>}
        {array &&
          array.map((todo, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{todo}</td>
              <td>
                <button onClick={() => deleteNode(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => editNode(index)}>Edit</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Todo;
