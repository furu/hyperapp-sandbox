import "babel-polyfill"
import { h, app } from "hyperapp"

const _getUserInfo = userId => {
  const request = new XMLHttpRequest()
  request.open("GET", `https://api.github.com/users/${userId}`)
  request.addEventListener("load", event => {
    if (event.target.status !== 200) {
      console.log(`${event.target.status}: ${event.target.responseText}`)
      return
    }

    const userInfo = JSON.parse(event.target.responseText)
    return userInfo
  })
  request.addEventListener("error", () => {
    console.log("Network Error")
  })
  request.send()
}

const state = {
  userInfo: {
    name: "",
    login: "",
    avatar_url: "",
    location: "",
    public_repos: ""
  }
}

const actions = {
  getUserInfo: userId => async (state, actions) => {
    const userInfo = await _getUserInfo(userId)
    actions.setUserInfo(userInfo)
  },
  setUserInfo: userInfo => () => {
    console.log(userInfo)
    return { userInfo: userInfo }
  }
}

const view = (state, actions) => (
  <div>
    <h2>GitHub User Info</h2>

    <button onclick={() => actions.getUserInfo("furu")}>Get user info</button>

    <div id="result">
      <h4>
        {state.userInfo.name} (@{state.userInfo.login})
      </h4>
      <img
        src={state.userInfo.avatar_url}
        alt={state.userInfo.login}
        height="100"
      />
      <dl>
        <dt>Location</dt>
        <dd>{state.userInfo.location}</dd>
        <dt>Repositories</dt>
        <dd>{state.userInfo.public_repos}</dd>
      </dl>
    </div>
  </div>
)

app(state, actions, view, document.body)

window._getUserInfo = _getUserInfo
