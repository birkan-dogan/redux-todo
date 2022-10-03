import React from "react";
import okLogo from "../assets/ok.png";
import deleteLogo from "../assets/delete.png";
const TodoItem = ({ completed, text, id }) => {
  return (
    <div>
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
