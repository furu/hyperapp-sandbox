// @flow
// @jsx h
import { h, app } from "hyperapp"
// import devtools from "hyperapp-devtools"
// $FlowFixMe
import "semantic-ui/dist/semantic.min.css"
import App from "./components/App"

const state = {
  text: "",
  photoAdded: false
}

const actions = {
  getState: () => state => state,
  inputText: input => () => ({
    text: input
  }),
  togglePhoto: () => state => ({
    photoAdded: !state.photoAdded
  })
}

const view = (state, actions) => <App state={state} actions={actions} />

window.app = app(state, actions, view, document.querySelector("#root"))
