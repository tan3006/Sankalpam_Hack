export function updateTotal(input, output) {
  const cardTotal = document.querySelector('[data-card-total]');
  const containerTotal = cardTotal.parentElement
  const total =  input - output
  if (total < 0 ) {
    containerTotal.classList.remove('balance-card-positive')
    containerTotal.classList.add('balance-card-negative')
  } else {
    containerTotal.classList.remove('balance-card-negative')
    containerTotal.classList.add('balance-card-positive')
  }
  return total;
}