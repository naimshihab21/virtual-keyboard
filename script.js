(function() {
  const buttons = document.querySelectorAll('button')
  const textArea = document.querySelector('#textArea')

  buttons.forEach(button => {
    const btnID = button.getAttribute('id')
    
    let countCapslock = 0
    button.addEventListener('click', () => {
      if (btnID === 'capslockID') {
        buttons.forEach(el => {
          if (countCapslock % 2 === 0) el.style.textTransform = 'uppercase'
          else el.style.textTransform = 'none'          
        })
      }
      else if (btnID === 'spaceID') textArea.value = `${textArea.value + ' '}`
      else if (btnID === 'btnBackspace') {
        const getContent = textArea.value.toString()
        const doBackspace = getContent.slice(0 , getContent.length - 1)
        textArea.value = `${doBackspace}`
      }

      countCapslock++
      btnID !== 'removeAll' ? textArea.value = `${textArea.value + button.innerText}` : textArea.value = ''
    })
  })
})()