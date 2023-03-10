const currentDisplayField = document.querySelector('.current-display');
const previousDisplayField = document.querySelector('.previous-display');
const buttonsContainer = document.querySelector('.buttons-container');

buttonsContainer.addEventListener('click', e => {
  // numbers
  if (e.target.classList.contains('number') && currentDisplayField.innerText.length < 8) {
    if ((currentDisplayField.innerText == '' && e.target.classList.contains('number-0')) || currentDisplayField.innerText.split('')[0] == 0) {
      currentDisplayField.innerText = e.target.innerText;
    } else {
      currentDisplayField.innerText += e.target.innerText;
    }
  }
  // decimal
  if (e.target.classList.contains('decimal') && !currentDisplayField.innerText.includes('.')) {
    currentDisplayField.innerText += e.target.innerText;
  }

  // operands
  if (e.target.classList.contains('operator')) {
    const operator = e.target.innerText;
    switch (operator) {
      case '+':
        if (currentDisplayField.innerText !== '') {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = '';
        }
        break;
      case '−':
        if (currentDisplayField.innerText !== '') {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = '';
        }
        break;
      case '×':
        if (currentDisplayField.innerText !== '') {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = '';
        }
        break;
      case '÷':
        if (currentDisplayField.innerText !== '') {
          previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
          currentDisplayField.innerText = '';
        }
        break;
      case '=':
        if (currentDisplayField.innerText !== '') {
          if (previousDisplayField.innerText.includes('+')) {
            const currentNumber = Number(currentDisplayField.innerText);
            const previousNumber = Number(previousDisplayField.innerText.split(' ')[0]);
            currentDisplayField.innerText = currentNumber + previousNumber;
            previousDisplayField.innerText = '';
          }
          if (previousDisplayField.innerText.includes('−')) {
            const currentNumber = Number(currentDisplayField.innerText);
            const previousNumber = Number(previousDisplayField.innerText.split(' ')[0]);
            currentDisplayField.innerText = previousNumber - currentNumber;
            previousDisplayField.innerText = '';
          }
          if (previousDisplayField.innerText.includes('÷')) {
            const currentNumber = Number(currentDisplayField.innerText);
            const previousNumber = Number(previousDisplayField.innerText.split(' ')[0]);
            if (currentNumber === 0) {
              currentDisplayField.innerText = 'Undefined';
            } else {
              currentDisplayField.innerText = previousNumber / currentNumber;
            }
            previousDisplayField.innerText = '';
          }
          if (previousDisplayField.innerText.includes('×')) {
            const currentNumber = Number(currentDisplayField.innerText);
            const previousNumber = Number(previousDisplayField.innerText.split(' ')[0]);
            currentDisplayField.innerText = previousNumber * currentNumber;
            previousDisplayField.innerText = '';
          }
        }
        break;

      default:
        break;
    }
  }
  // functions
  if (e.target.classList.contains('function')) {
    const func = e.target.innerText;
    switch (func) {
      case 'AC':
        
        currentDisplayField.innerText = '0';
        previousDisplayField.innerText = '';
        break;
      case '±':
        if (!currentDisplayField.innerText.includes('-')) {
          currentDisplayField.prepend('-');
        } else {
          currentDisplayField.innerText = currentDisplayField.innerText.split('-')[1];
        }
        break;
      case '%':
        // if (currentDisplayField.innerText !== '') {
        //   currentDisplayField.innerText = Number(currentDisplayField.innerText) / 100;
        // }
        currentDisplayField.innerText = Number(currentDisplayField.innerText)/100;
      default:
        break;
    }
  }
});