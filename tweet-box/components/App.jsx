import { h } from "hyperapp"
import TweetBox from "./TweetBox"

const App = ({ state, actions }) => <TweetBox state={state} actions={actions} />

export default App
