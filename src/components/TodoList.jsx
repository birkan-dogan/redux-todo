import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTodo } from "../redux/actions/todoActions";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList);
  const handleClear = () => dispatch(clearTodo());
  return (
    <div>
      <div>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button className="clear-button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
