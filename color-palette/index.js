import { h, app } from "hyperapp"
import App from "./components/App"

const state = {
  red: 0,
  green: 100,
  blue: 255
}

const actions = {
  setRed: value => state => ({ red: value }),
  setGreen: value => state => ({ green: value }),
  setBlue: value => state => ({ blue: value })
}

const view = (state, actions) => <App state={state} actions={actions} />

app(state, actions, view, document.querySelector("#root"))
