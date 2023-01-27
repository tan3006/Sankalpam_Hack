export const Modal = {
  open(){
    document.querySelector('[data-modal]').classList.add('active')
  },
  close(){
    document.querySelector('[data-modal]').classList.remove('active')
  }
}

export const Utils = {
  clearFields() {
    const formInputs = document.querySelectorAll('.form-data input')
    formInputs.forEach((input) => {
    input.value = "";
    })
    const radioIncome = document.querySelector('input#income')
    radioIncome.checked = true;
  },

  transformCurrency(amount) { 
    amount = Number(amount).toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'
    })
    return amount;
  },

  transformDate(date) {
    const updatedDate = date.split("-")
    date = `${updatedDate[2]}/${updatedDate[1]}/${updatedDate[0]}`
    return date
  },

  typeOfTransaction() {
    const operation = document.querySelector('input#income')
    if (operation.checked) {
      return operation.id 
    } else {
      return "expense"
    }
  }
}