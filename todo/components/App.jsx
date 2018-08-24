import { h } from "hyperapp"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

const App = ({ state, actions }) => (
  <div>
    <h1>TODO App</h1>
    <button onclick={() => actions.resetTodo()}>リセット</button>
    <TodoInput
      todo={state.todo}
      addTodo={actions.addTodo}
      inputTodo={actions.inputTodo}
    />
    <TodoList todos={state.todos} />
  </div>
)

export default App
