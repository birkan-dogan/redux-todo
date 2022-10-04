import React from "react";
import okLogo from "../assets/ok.png";
import deleteLogo from "../assets/delete.png";
const TodoItem = ({ completed, text, id }) => {
  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
  };
  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img src={okLogo} alt="" className="ok-logo" />
        </span>
        <span>
          <img src={deleteLogo} alt="" className="delete-logo" />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
