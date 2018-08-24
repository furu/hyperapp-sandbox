import { h, app } from "hyperapp"

const state = {
  selectedImages: [],
  recentlyPostedImages: []
}

const actions = {
  loadRecentlyPostedImages: () => (state, actions) => {
    fetch("https://dog.ceo/api/breeds/image/random/8")
      .then(resp => {
        return resp.json()
      })
      .then(json => {
        const images = json.message.map(url => {
          return { url: url }
        })

        actions.setRecentlyPostedImages(images)
      })
  },
  setRecentlyPostedImages: images => () => ({
    recentlyPostedImages: images
  }),
  select: image => (state, actions) => {
    if (state.selectedImages.includes(image)) {
      return
    }

    return { selectedImages: state.selectedImages.concat(image) }
  },
  unselect: image => (state, actions) => ({
    selectedImages: state.selectedImages.filter(x => x.url !== image.url)
  })
}

const view = (state, actions) => (
  <div class="main">
    <h1>選択された画像</h1>
    <div class="selected-images">
      {state.selectedImages.map(image => (
        <img src={image.url} onclick={() => actions.unselect(image)} />
      ))}
    </div>

    <h1>最近投稿された画像</h1>
    <button onclick={() => actions.loadRecentlyPostedImages()}>取得</button>
    <div class="recently-posted-images">
      {state.recentlyPostedImages.map(image => (
        <img src={image.url} onclick={() => actions.select(image)} />
      ))}
    </div>
  </div>
)

app(state, actions, view, document.body)
