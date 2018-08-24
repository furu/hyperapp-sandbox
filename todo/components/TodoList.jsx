import { h } from "hyperapp"
import TodoItem from "./TodoItem"

const TodoList = ({ todos }) => (
  <div>
    <ul>{todos.map((todo, i) => <TodoItem todo={todo} key={i} />)}</ul>
  </div>
)

export default TodoList
