import { h } from "hyperapp"

const ColorNumbers = ({ state, actions }) => (
  <ul className="colorNumbers">
    <li>
      red:{" "}
      <input
        type="number"
        value={state.red}
        onchange={e => actions.setRed(e.target.value)}
      />
    </li>
    <li>
      green:{" "}
      <input
        type="number"
        value={state.green}
        onchange={e => actions.setGreen(e.target.value)}
      />
    </li>
    <li>
      blue:{" "}
      <input
        type="number"
        value={state.blue}
        onchange={e => actions.setBlue(e.target.value)}
      />
    </li>
  </ul>
)

export default ColorNumbers