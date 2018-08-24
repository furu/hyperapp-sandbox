import { h } from "hyperapp"

const TodoInput = ({ todo, addTodo, inputTodo }) => (
  <div>
    <input
      placeholder="新規TODOを入力してください"
      value={todo}
      oninput={e => inputTodo(e.target.value)}
    />
    <button onclick={() => addTodo(todo) }>登録</button>
  </div>
)

export default TodoInput
