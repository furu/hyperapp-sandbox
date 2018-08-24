// @flow
// @jsx h
import { h } from "hyperapp"

const remainingCharacters = state => {
  if (state.photoAdded) {
    return 140 - 23 - state.text.length
  } else {
    return 140 - state.text.length
  }
}

const OverflowAlert = ({ state }) => {
  if (remainingCharacters(state) < 0) {
    if (state.photoAdded) {
      var beforeOverflowText = state.text.substring(140 - 23 - 10, 140 - 23)
      var afterOverflowText = state.text.substring(140 - 23)
    } else {
      var beforeOverflowText = state.text.substring(140 - 10, 140)
      var afterOverflowText = state.text.substring(140)
    }

    return (
      <div className="ui visible warning message">
        <strong>Oops! Too long:</strong>
        &nbsp;...{beforeOverflowText}
        <strong style={{ backgroundColor: "#f2dede" }}>
          {afterOverflowText}
        </strong>
      </div>
    )
  } else {
    return ""
  }
}

const TweetBox = ({ state, actions }: { state: any, actions: any }) => (
  <div className="ui form" style={{ padding: "20px" }}>
    <OverflowAlert state={state} />

    <div className="field">
      <textarea rows="3" oninput={e => actions.inputText(e.target.value)}>
        {state.text}
      </textarea>
    </div>

    <span>{remainingCharacters(state)}</span>

    <button
      className="ui right floated primary button"
      disabled={state.text.length === 0 || remainingCharacters(state) < 0}
    >
      Tweet
    </button>

    <button
      className="ui right floated button"
      onclick={() => actions.togglePhoto()}
    >
      {state.photoAdded ? "✓ Photo Added" : "Add Photo"}
    </button>
  </div>
)

export default TweetBox
