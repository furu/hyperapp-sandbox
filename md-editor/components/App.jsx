import { h } from "hyperapp"
import Preview from "./Preview"
import Header from "./Header"
import Editor from "./Editor"

const App = ({ previewStyles, editorItems, state, actions }) => (
  <div>
    <Header previewStyles={previewStyles} changeCss={actions.changeCss} />
    <article id="main">
      <Editor editorItems={editorItems} actions={actions} />
      <Preview state={state} />
    </article>
  </div>
)

export default App
