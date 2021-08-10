'use strict'

const app = {}

app.onClickButton = function () {
  const inputSource = document.getElementById('inputSource')
  const inputMatch = document.getElementById('inputMatch')
  const inputReplace = document.getElementById('inputReplace')
  const outputSource = document.getElementById('outputSource')

  if (inputSource.value === '') {
    window.alert('Source string required.')
    return
  } else if (inputMatch.value === '') {
    window.alert('Match pattern required.')
    return
  } else if ((this.id === 'replaceButton') && (inputReplace.value === '')) {
    window.alert('Replace pattern required.')
    return
  }

  outputSource.innerHTML = inputSource.value
}

app.clearInput = function () {
  for (const i of document.getElementsByClassName('regExpInput')) {
    i.value = ''
  }
}

window.onload = function () {
  app.clearInput()
  for (const i of document.getElementsByClassName('regExpButton')) {
    i.addEventListener('click', app.onClickButton)
  }
}
