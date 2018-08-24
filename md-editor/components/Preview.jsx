import { h } from "hyperapp"

const Preview = ({ state }) => (
  <section id="previewHtml">
    <div
      id="preview"
      className={state.previewStyle}
      innerHTML={state.preview}
    />
  </section>
)

export default Preview
