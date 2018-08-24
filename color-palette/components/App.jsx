import { h } from "hyperapp"
import ColorPrev from "./ColorPrev"
import ColorNumbers from "./ColorNumbers"

const App = ({ state, actions }) => (
  <div className="colorPalette">
    <ColorPrev state={state} />
    <ColorNumbers state={state} actions={actions} />
  </div>
)

export default App
