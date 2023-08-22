import { useState } from "react";
import Panel1 from "./Components/Panel1";
import "./styles.css";
import Panel2 from "./Components/Panel2";

export default function App() {
  const [listOfObject, setListOfObject] = useState([]);
  let addList = (inputText, inputTime) => {
    let obj = {
      text: inputText,
      time: inputTime
    };
    setListOfObject([...listOfObject, obj]);
    console.log("inside addList");
  };
  let deleteItem = (key) => {
    listOfObject.splice(key, 1);
    setListOfObject([...listOfObject]);
  };
  return (
    <div className="App">
      <Panel1 addList={addList} />
      <hr />
      <h3>Todo List</h3>
      {listOfObject.map((item, i) => {
        return <Panel2 key={i} index={i} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
}
