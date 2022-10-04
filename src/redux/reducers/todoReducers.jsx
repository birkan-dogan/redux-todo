import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO,
} from "../types/todoTypes";

const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "study redux", completed: false },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DELETE_TODO:
      return { ...state, ...payload };
    case TOGGLE_TODO:
      state.todoList.filter((todo) =>
        todo.id == payload ? (todo.completed = !todo.completed) : null
      );
      return { todoList: [...state.todoList] };
    case CLEAR_TODO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default todoReducer;
