let userInputs = ''

const onButtonClick = (value) => {
  userInputs += value
  let display = document.getElementById('display')
  display.textContent += value
}

const onClearDisplay = () => {
  document.getElementById('display').textContent = ''
  userInputs = ''
}

const onEqualsClick = () => {
  const result = eval(userInputs)
  document.getElementById('display').textContent = result
  userInputs = ''
}
