import { h } from "hyperapp"

const ColorPrev = ({ state }) => (
  <div
    className="colorPrev"
    style={{
      backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
    }}
  />
)

export default ColorPrev
