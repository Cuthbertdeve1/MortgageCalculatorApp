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
//const ;
// const repaymentCheck = document.getElementById('repaymentCheck');
// const interestOnlyCheck = document.getElementById('interestOnlyCheck');
const mortgageTypeErr = document.getElementById('mortgageTypeError');
const mortgageType = document.querySelector('input[name="mortgageType"]');
const calculateBtn = document.getElementById('calculateBtn');
const mortageResults = document.getElementById('mortageResults');
const resultsDisplay = document.getElementById('resultsDisplay');
const monthlyRepaymentDis = document.getElementById('monthlyRepayment');
const totalRepaymentDis = document.getElementById('totalRepayment');
const rslts = document.getElementById('rslts');
function mortgageCalculator(){
  const amount = parseFloat(mortageAmount.value);
  const term = parseInt(mortgageTerm.value);
  const interest = parseFloat(interestRate.value)/100;
    const type = mortgageType.value;
    let valid = true;
    if(isNaN(amount)){
      validationError(mortgageAmntErorrs,mortageAmount,mortgageAmntSpan);
      valid = false;
    }
    if(amount<=0){
      //validation();
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
    if(!(type==='')){
      //validationError(mortgageTypeErr,mortgageType);
      mortgageTypeErr.classList.remove('invalid-feedback');
      valid = false;
    }
    if(valid){
    let monthlyRepayment, totalRepayment;
    if(type==='repayment'){
      const monthlyRate = interest / 12;
      const numbOfPayments = term * 12 ;
      monthlyRepayment = (amount * monthlyRate) / (1- Math.pow(1+ monthlyRate, numbOfPayments));
      totalRepayment = monthlyRepayment * numbOfPayments;
      rslts.style=('display:none');
      resultsDisplay.style=('display:block');
      monthlyRepaymentDis.innerHTML=`£ ${monthlyRepayment.toFixed(2)}`;
      totalRepaymentDis.innerHTML = `£ ${totalRepayment.toFixed(2)}`;
      console.log('monthly repayment is'+ monthlyRepayment.toFixed(2));
      console.log('total repayment is'+ totalRepayment.toFixed(2));
    }
    else {
      monthlyRepayment = (amount * interest) / 12;
      totalRepayment = monthlyRepayment * term * 12;
      rslts.style=('display:none');
      resultsDisplay.style=('display:block');
      console.log('monthly repayment is'+ monthlyRepayment.toFixed(2));
      console.log('total repayment is'+ totalRepayment.toFixed(2));
    }
}
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
function clearMortagageAll(){
  mortageAmount.value='';
  mortgageTerm.value='';
  interestRate.value='';
 resultsDisplay.style=('display:none');
 rslts.style=('display:block');
    clearError(mortgageAmntErorrs,mortageAmount,mortgageAmntSpan);
    clearError(mortgageTermError,mortgageTerm,mortgageYrsSpan);
    clearError(interestRateError,interestRate,interestRateSpan);
}
clearAll.addEventListener('click',() =>{
  clearMortagageAll();
})

calculateBtn.addEventListener('click',()=>{
mortgageCalculator();

})
