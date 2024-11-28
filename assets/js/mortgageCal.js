  const clearAll = document.getElementById('clearAll');
const mortageAmount = document.getElementById('mortgageAmntInput');
const mortgageAmntErorrs = document.getElementById('mortgageAmntError');
const mortgageTerm = document.getElementById('mortgageTermInput');
const mortgageTermError = document.getElementById('mortgageTermError');
const interestRate = document.getElementById('interestRateInput');
const interestRateError = document.getElementById('interestRateError');
const mortgageAmntSpan = document.getElementById('mortgageAmntSpan');
const mortgageYrsSpan = document.getElementById('mortgageYrs');
const interestRateSpan = document.getElementById('interestRateSpan');
const repaymentFCheck = document.getElementById('repaymentFormCheck');
 const interestOnlyFCheck = document.getElementById('interestFormCheck');
const mortgageTypeErr = document.getElementById('mortgageTypeError');
const mortgageType = document.getElementsByName('mortgageType');
const calculateBtn = document.getElementById('calculateBtn');
const mortageResults = document.getElementById('mortageResults');
const resultsDisplay = document.getElementById('resultsDisplay');
const monthlyRepaymentDis = document.getElementById('monthlyRepayment');
const totalRepaymentDis = document.getElementById('totalRepayment');
const rslts = document.getElementById('rslts');
const formCheck = document.querySelectorAll('.form-check');
function mortgageCalculator(){
  const amount = parseFloat(mortageAmount.value);
  const term = parseInt(mortgageTerm.value);
  const interest = parseFloat(interestRate.value)/100;
  var selectedOption;
  mortgageType.forEach((i) => {
    if(i.checked){
      selectedOption = i.value;
    }
  });
    let valid = true;
    if(isNaN(amount)){
      validationError(mortgageAmntErorrs,mortageAmount,mortgageAmntSpan);
      valid = false;
    }
    if(amount<=0){
      valid = false;
    }
    if(isNaN(term)){
      validationError(mortgageTermError,mortgageTerm,mortgageYrsSpan);
      valid = false;
    }
    if(isNaN(interest)){
      validationError(interestRateError,interestRate,interestRateSpan);
      valid = false;
    }
    if(!selectedOption){
      mortgageTypeErr.classList.remove('invalid-feedback');
      valid = false;
    }
    //calculations
    if(valid){
      rslts.style=('display:none');
      resultsDisplay.style=('display:block');
      console.log('amount ' +amount);
      console.log('years '+ term);
      console.log('interest '+ interest);
      console.log('type '+ selectedOption);
      const monthlyRate = interest / 12;
      const totalMonths = term * 12 ;
      const  monthlyRepayment = (amount * monthlyRate) /
      (1- Math.pow(1 + monthlyRate, -totalMonths));
      const  totalRepayment = monthlyRepayment * totalMonths;
      const  totalInterestRepayment = totalRepayment - amount ;
      const monthlyInterestRepayment = totalInterestRepayment/totalMonths;
        if(selectedOption==='repayment'){
      monthlyRepaymentDis.innerHTML=`£ ${addCommas(monthlyRepayment.toFixed(2))}`;
      totalRepaymentDis.innerHTML = `£ ${addCommas(totalRepayment.toFixed(2))}`;
    }
    else if(selectedOption==="interestOnly") {
      monthlyRepaymentDis.innerHTML=`£ ${addCommas(monthlyInterestRepayment.toFixed(2))}`;
      totalRepaymentDis.innerHTML = `£ ${addCommas(totalInterestRepayment.toFixed(2))}`;
    }
}
}
function addCommas(num){
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}
mortageAmount.addEventListener('input',()=>{
clearError(mortgageAmntErorrs,mortageAmount,mortgageAmntSpan);
})
mortgageTerm.addEventListener('input',()=>{
clearError(mortgageTermError,mortgageTerm,mortgageYrsSpan);
})
interestRate.addEventListener('input',()=>{
clearError(interestRateError,interestRate,interestRateSpan);
})
function validationError(errId,fieldId,errSpan){
  errId.classList.remove('invalid-feedback');
  fieldId.classList.add('input-error');
  //errId.innerHTML ='<style>.input-group span{ color: hsl(0, 0%, 100%);background-color: hsl(4, 69%, 50%);}</style>';
  errSpan.style="color: hsl(0, 0%, 100%);background-color: hsl(4, 69%, 50%);border: 2px solid hsl(4, 69%, 50%);";
}
function clearError(errorDisplay, inputField,errSpan) {
  errorDisplay.classList.add('invalid-feedback');
  inputField.classList.remove('input-error');
  errSpan.style="";
}
function clearMortgageAll() {
  // Clear input fields
  mortageAmount.value = '';
  mortgageTerm.value = '';
  interestRate.value = '';

  // Reset results display
  resultsDisplay.style = 'display:none';
  rslts.style = 'display:block';

  // Clear error styles
  clearError(mortgageAmntErorrs, mortageAmount, mortgageAmntSpan);
  clearError(mortgageTermError, mortgageTerm, mortgageYrsSpan);
  clearError(interestRateError, interestRate, interestRateSpan);

  // Reset radio buttons and their styles
  mortgageType.forEach((type) => {
    type.checked = false;
    const parent = type.closest('.form-check');
    parent.style.backgroundColor = ''; // Reset background color
  });

  // Reset error display for mortgage type
  mortgageTypeErr.classList.add('invalid-feedback');
}
// Event listener for "Clear All" button
clearAll.addEventListener('click', () => {
  clearMortgageAll();
});

// Event listener to handle background color change for checkboxes
mortgageType.forEach((type) => {
  type.addEventListener('change', () => {
    formCheck.forEach((check) => {
      check.style.backgroundColor = ''; // Reset all backgrounds
    });
    if (type.checked) {
      mortgageTypeErr.classList.add('invalid-feedback');
      const parent = type.closest('.form-check');
      parent.style.backgroundColor = 'hsl(60deg 72.22% 92.94%)'; // Change background when checked
    }
  });
})
// Other event listeners and logic remain unchanged
calculateBtn.addEventListener('click', () => {
  mortgageCalculator();
});
