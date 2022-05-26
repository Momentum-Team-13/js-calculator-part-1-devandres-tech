document.addEventListener('DOMContentLoaded', () => {
  let userInputs = ''
  const display = document.getElementById('display')

  document.getElementById('wrapper').addEventListener('click', (e) => {
    const inputEvent = e.target.innerHTML
    display.textContent += e.target.innerHTML.replace(/x/g, '*')

    switch (inputEvent) {
      case '=':
        const calculation = userInputs.replace(/x/g, '*')
        const result = eval(calculation)
        display.textContent = result
        userInputs = ''
        break

      case 'C':
        display.textContent = ''
        userInputs = ''
        break

      default:
        userInputs += inputEvent
        break
    }
  })
})
