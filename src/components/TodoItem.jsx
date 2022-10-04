import React from "react";
import okLogo from "../assets/ok.png";
import deleteLogo from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/todoActions";
const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();
  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
  };
  const handleToggle = () => dispatch(toggleTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));
  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img src={okLogo} alt="" className="ok-logo" onClick={handleToggle} />
        </span>
        <span>
          <img
            src={deleteLogo}
            alt=""
            className="delete-logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
