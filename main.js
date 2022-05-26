document.addEventListener('DOMContentLoaded', () => {
  let userInputs = ''
  const display = document.getElementById('display')

  document.getElementById('wrapper').addEventListener('click', (e) => {
    const inputEvent = e.target.innerHTML
    display.textContent += e.target.innerHTML.replace(/x/g, '*')

    if (inputEvent === '=') {
      const calculation = userInputs.replace(/x/g, '*')
      const result = eval(calculation)
      display.textContent = result
      userInputs = ''
    } else if (inputEvent === 'C') {
      display.textContent = ''
      userInputs = ''
    } else {
      userInputs += inputEvent
    }
  })
})
