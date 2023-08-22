import React from "react";
import "../styles.css";
let Panel2 = (props) => {
  return (
    <>
      <div>
        <div class="card container-sm">
          <div
            class="card-body"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h6>Task</h6>
              {props.item.text}
            </div>
            <div>
              <h6>Time</h6>
              {props.item.time}
            </div>
            <div>
              <i
                class="fa-solid fa-trash"
                onClick={() => {
                  props.deleteItem(props.index);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Panel2;
