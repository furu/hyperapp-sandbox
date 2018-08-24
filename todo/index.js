import { h, app } from "hyperapp"
import devtools from "hyperapp-devtools"
import App from "./components/App"

const state = {
  todo: "",
  todos: [],
}

const actions = {
  inputTodo: value => () => {
    return {
      todo: value
    }
  },
  addTodo: todo => state => ({
    todos: [...state.todos, todo],
    todo: ""
  }),
  resetTodo: () => () => ({
    todos: []
  })
}

const view = (state, actions) => <App state={state} actions={actions} />

// app(state, actions, view, document.querySelector("#root"))
devtools(app)(state, actions, view, document.querySelector("#root"))
