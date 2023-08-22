import React, { useState } from "react";
export default function Panel1(props) {
  const [inputText, setInputText] = useState("");
  const [inputTime, setInputTime] = useState("");
  let checkValue = () => {
    if (inputText !== "" && inputTime !== "") {
      props.addList(inputText, inputTime);
      setInputText("");
      setInputTime("");
    } else if (inputText === "" && inputTime !== "") {
      alert("Task is Empty");
    } else if (inputText !== "" && inputTime === "") {
      alert("Time is Empty");
    } else {
      alert("Please Fill The Fields");
    }
  };

  return (
    <>
      <h3>Todo App</h3>
      <div class="container ">
        <div class="row ">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Task Here"
              aria-label="Enter Your Task Here"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          </div>
          <div class="col">
            <input
              type="number"
              class="form-control"
              placeholder="Time Required(in Hrs)"
              aria-label="Time Required(in Hrs)"
              value={inputTime}
              onChange={(e) => {
                setInputTime(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            class="btn btn-danger"
            style={{ width: "80px" }}
            onClick={() => {
              checkValue();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
