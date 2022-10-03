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
      return { ...state, ...payload };
    case DELETE_TODO:
      return { ...state, ...payload };
    case TOGGLE_TODO:
      return { ...state, ...payload };
    case CLEAR_TODO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default todoReducer;
