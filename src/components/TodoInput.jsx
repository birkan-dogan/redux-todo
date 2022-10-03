import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};
export default TodoInput;
