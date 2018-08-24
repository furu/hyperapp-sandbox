import { h, app } from "hyperapp"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.css"

const state = {
  possibleDates: []
}

const actions = {
  createDatepicker: el => () => {
    flatpickr(el, {
      inline: true
    })
  }
}

const view = (state, actions) => (
  <div>
    <textarea
      rows="10"
      placeholder="候補の区切りは改行で判断されます。また、カレンダーの日付をクリックすると日時が入ります。"
    />
    <input
      type="text"
      id="js-datepicker"
      oncreate={el => actions.createDatepicker(el)}
    />
  </div>
)

app(state, actions, view, document.body)

// document.addEventListener("DOMContentLoaded", () => {
//   flatpickr(document.getElementById("js-datepicker"), {})
// })
