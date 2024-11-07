
let billInput = document.getElementById('billInput');
let peopleInput = document.getElementById('numbPeople');
const tipbtns = document.querySelectorAll('.percent-btns');
const tipCustomInput = document.getElementById('tipCustom');
const tipAmntDisplay = document.getElementById('personTipAmnt');
const totalAmntDisplay = document.getElementById('totalPersonAmnt');
const customTipErrorDisplay = document.getElementById('errorTip');
const billErrorDisplay = document.getElementById('errorBill');
const peopleErrorDisplay = document.getElementById('errorNumbPeople');
const resetBtn = document.getElementById('resetBtn');
let enabled = true;
function tipsCalculations(numb){
   const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);
    let valid = true;

         if(bill<=0 || isNaN(bill)){
         errorsDisplay(billErrorDisplay,billInput,"Enter a valid amount");
           valid = false;
         }

         if(people< 0 || isNaN(people)){
         errorsDisplay(peopleErrorDisplay,peopleInput,"Enter a valid number");
           valid = false;
         }
         if(people===0){
           errorsDisplay(peopleErrorDisplay,peopleInput,"Can't be zero");
           valid = false;
         }

         if(valid){

    let   tipsPercent =(numb/100);
    let tipAmount = ((bill/people)*tipsPercent);
    let totalPerPerson = ((bill/people)+tipAmount);
    tipAmntDisplay.innerHTML= tipAmount.toFixed(2);
    totalAmntDisplay.innerHTML= totalPerPerson.toFixed(2);
    }
}
//add addEventListener to tips buttons
tipbtns.forEach((button) => {
  button.addEventListener('click',()=>{
resetBtn.style="background-color:hsl(172, 67%, 45%)";
    const percent = parseInt(button.value);
    const tip = tipsCalculations(percent);
  })
});

//add addEventListener for custom tips
tipCustomInput.addEventListener('input',()=>{
  const customPercent = parseFloat(tipCustomInput.value);

  if(!isNaN(customPercent) && customPercent >= 0 ){
   tipCustomInput.style.cursor='pointer';

   tipCustomInput.addEventListener('click',()=>{
     resetBtn.style="background-color:hsl(172, 67%, 45%)";
     tipsCalculations(customPercent);
   })
 }

 else {

   errorsDisplay(customTipErrorDisplay,tipCustomInput,"can't be invalid");

      }
})

function errorsDisplay(text,field,message){
  text.innerHTML = message;
  field.classList.add('input-error');
}
// Event listener for bill input to clear errors a
billInput.addEventListener('input', () => {
  clearError(billErrorDisplay, billInput);
});

// Event listener for people input to clear errors and reset tips on re-entry
peopleInput.addEventListener('input', () => {
  clearError(peopleErrorDisplay, peopleInput);
});

tipCustomInput.addEventListener('input', () => {
  clearError(customTipErrorDisplay, tipCustomInput);  // Clear custom tip input error
});

// Helper function to clear the error display and reset input field styles
function clearError(errorDisplay, inputField) {
  errorDisplay.textContent = '';
  inputField.classList.remove('input-error');
}
//function to reset the app
function resetTips(){
  tipAmntDisplay.innerHTML = '$0.00';
  totalAmntDisplay.innerHTML = '$0.00';
  billInput.value = '';
  peopleInput.value = '';
  tipCustomInput.value = '';
  clearError(billErrorDisplay, billInput);
  clearError(peopleErrorDisplay, peopleInput);
  clearError(customTipErrorDisplay, tipCustomInput);

}

resetBtn.addEventListener('click',()=>{
  resetTips();
})
