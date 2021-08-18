'use strict'

const app = {}

app.onClickButton = function () {
  const inputSource = document.getElementById('inputSource')
  const inputMatch = document.getElementById('inputMatch')
  const inputReplace = document.getElementById('inputReplace')
  const outputSource = document.getElementById('outputSource')
  const outputModified = document.getElementById('outputModified')

  const blankString = /^\s*$/
  if (inputSource.value.match(blankString)) {
    window.alert('Source string required.')
    return
  } else if (inputMatch.value.match(blankString)) {
    window.alert('Match pattern required.')
    return
  }

  const inputRegExp = /^(?:\s*\/)(.*)(?:\/)([igmsuy]*)(?:\s*)$/
  const parseMatch = inputMatch.value.match(inputRegExp)
  if (parseMatch === null) {
    window.alert('Invalid match pattern.')
    return
  }
  const pattern = inputMatch.value.match(inputRegExp)[1]
  const flag = inputMatch.value.match(inputRegExp)[2]

  outputSource.innerHTML = inputSource.value.replace(RegExp(pattern, flag),
    '<span style="color:green;">$&</span>')
  if (this.id === 'replaceButton') {
    outputModified.innerHTML = inputSource.value.replace(RegExp(pattern, flag),
      inputReplace.value)
  }
}

app.clearInput = function () {
  for (const i of document.getElementsByClassName('regExpInput')) {
    i.value = ''
  }
}

window.onload = function () {
  const resetInput = document.getElementById('resetCheckBox')

  if (resetInput.checked) {
    app.clearInput()
  }
  for (const i of document.getElementsByClassName('regExpButton')) {
    i.addEventListener('click', app.onClickButton)
  }
}
