import "./App.css";
import Todo from "./components/Todo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./redux/reducers/todoReducers";
function App() {
  const store = createStore(todoReducer);
  return (
    <div className="app">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
