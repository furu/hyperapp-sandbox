import { h } from "hyperapp"

const EditorButtons = ({ editorItems, actions }) => (
  <p id="editorButtons">
    {editorItems.map(editorItem => {
      return (
        <button
          className={"editorButton " + editorItem.name}
          value={editorItem.name}
          onclick={e => actions.addEditorItem(editorItem)}
        >
          {editorItem.name}
        </button>
      )
    })}

    <a
      className="editorButton download"
      download="inputMarkdown.md"
      onclick={e => actions.downloadFile(e.target)}
    >
      download
    </a>
  </p>
)

const Editor = ({ editorItems, actions }) => (
  <section id="inputMarkdown">
    <EditorButtons editorItems={editorItems} actions={actions} />

    <p id="editorWrap">
      <textarea
        id="editor"
        placeholder="# input markdown"
        oninput={e => actions.setInput(e.target.value)}
      />
    </p>
  </section>
)

export default Editor
