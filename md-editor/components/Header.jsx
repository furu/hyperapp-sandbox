import { h } from "hyperapp"

const Header = ({ previewStyles, changeCss }) => (
  <header id="header">
    <h1>Hyperapp Markdown Editor</h1>
    <p id="selectWrap">
      <label>
        CSS type :
        <select id="selectCss" onchange={e => changeCss(e.target.value)}>
          {previewStyles.map(previewStyle => {
            return <option value={previewStyle}>{previewStyle}</option>
          })}
        </select>
      </label>
    </p>
  </header>
)

export default Header
