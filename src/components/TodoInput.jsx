import { useState } from "react";

const TodoInput = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
