document.addEventListener('DOMContentLoaded', () => {
  let userInputs = ''
  const display = document.getElementById('display')

  document.querySelectorAll('.button').forEach((item) => {
    item.addEventListener('click', (e) => {
      display.textContent += e.target.innerHTML.replace(/x/g, '*')
      userInputs += e.target.innerHTML
    })
  })

  document.getElementById('equals').addEventListener('click', () => {
    const calculation = userInputs.replace(/x/g, '*')
    const result = eval(calculation)
    display.textContent = result
    userInputs = ''
  })

  document.getElementById('clear').addEventListener('click', () => {
    display.textContent = ''
    userInputs = ''
  })
})
