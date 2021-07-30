'use strict'

const app = {}

app.onClickButton = function () {
  console.log(`Click: ${this.id}`)
}

window.onload = function () {
  for (const i of document.getElementsByClassName('regExpButton')) {
    i.addEventListener('click', app.onClickButton)
  }
}
