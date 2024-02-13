let calculation = localStorage.getItem('calculation') || '';

displayResult();

function updateCalculation(value) {
  calculation += value;

  displayResult();

  localStorage.setItem('calculation', calculation);
}

function displayResult() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}
