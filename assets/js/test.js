//
// // let tip5 = document.getElementById('tip5').0.05;
// // let tip10 = document.getElementById('tip10').0.10;
// // let tip15 = document.getElementById('tip25')0.15;
// // let tip25 = document.getElementById('tip25')0.25;
// // let tip50 = document.getElementById('tip50')0.50;
// //let tipFive = parse(document.getElementById('tip5').0.05);
// // let billInput = document.getElementById('billInput');
// // let peopleInput = document.getElementById('numbPeople').value;
// // let tipInput = document.querySelectorAll('.btn');
// //  tipInput.forEach(( i) => {
// // i.addEventListener('click', function myTips() {
// //     var btnClick = this.getAttribute('id');
// //     let tipCustom = parseInt(document.getElementById('tipCustom').value);
// // let   tips =(this.getAttribute('value')/100);
// // console.log(tips);
// // return tips;
// // });
// // let tipsPercent = ee();
// // console.log(tipsPercent);
// // })
// // console.log(tipsPercent);
// // //tipsPercent = tips;
// // function tipsCalculations(){
// //   let bill = parseFloat(billInput).value;
// //   let people = parseInt(peopleInput).value;
// //   let tipAmount = (bill/people)*tipsPercent;
// //     console.log(tipAmount)
// //   let totalPerPerson = (bill/people)+tipAmount;
// //     console.log(totalPerPerson);
// // }
// // tipsCalculations();
//
//
// let billInput = document.getElementById('billInput');
// let peopleInput = document.getElementById('numbPeople');
// let tipInput = document.querySelectorAll('.btn');
// let resetButton = document.getElementById('resetBtn');
// function tipsCalculations(){
//  tipInput.forEach(( i) => {
// i.addEventListener('click', function () {
//   let bill = parseFloat(billInput.value);
//   let people = parseInt(peopleInput.value);
//     // var btnClick = this.getAttribute('id');
// DEBUG:
//
//     if(this.getAttribute('id')=== tipCustom){
//       let tipsCustom = document.getElementById('tipCustom');
//       tipCustom.addEventListener('input',()=>{
//         let customTipValue = parseFloat(tipsCustom.value);
//         if(!isNaN(customTipValue) && customTipValue > 0){
//            customTipValue = this.getAttribute('value');
//
//         }else {
//           document.getElementById('errorTip').innerHTML="can't be invalid";
//             tipCustom.classList.add('input-error');
//         }
//
//       })
//     }
//       let tips = this.getAttribute('value');
//   //let tipsCustom = parseFloat(document.getElementById('tipCustom').value);
//   resetButton.style="background-color:hsl(172, 67%, 45%)";
//      let valid = true;
//     // if(tips< 0  || isNaN(bill)){
//     //   document.getElementById('errorTip').innerHTML="can't be invalid";
//     // //  document.getElementById('billInput').className += 'input-error';
//     //     document.getElementById('tipCustom').classList.add('input-error');
//     //     valid = false;
//     //  }
//      if(bill<=0 || isNaN(bill)){
//        document.getElementById('errorBill').innerHTML="Enter a valid amount";
//      billInput.classList.add('input-error');
//        valid = false;
//      }
//
//      if(people< 0 || isNaN(people)){
//        document.getElementById('errorNumbPeople').innerHTML="Enter a valid number";
//      peopleInput.classList.add('input-error');
//        valid = false;
//      }
//      if(people===0){
//        console.log("cant be zero");
//        document.getElementById('errorNumbPeople').innerHTML="Can't be zero";
//      peopleInput.classList.add('input-error');
//        valid = false;
//      }
//
//      if(valid){
// let   tipsPercent =(this.getAttribute('value')/100);
// let tipAmount = ((bill/people)*tipsPercent);
// document.getElementById('personTipAmnt').innerHTML= tipAmount.toFixed(2);
// let totalPerPerson = ((bill/people)+tipAmount);
// //let totalPer = totalPerPerson.toFixed(2);
// document.getElementById('totalPersonAmnt').innerHTML= totalPerPerson.toFixed(2);
// //return tips;
// }
// });
// })
// }
// let resetClicked = resetButton.addEventListener('click',()=>{
//   reflesh();
// })
// // function customTips(){
// //   let tipsCustom = document.getElementById('tipCustom');
// //   tipCustom.addEventListener('input',()=>{
// //     let customTipValue = parseFloat(tipsCustom.value);
// //     if(!isNaN(customTipValue) && customTipValue > 0){
// //       applyCustomTip(customTipValue);
// //       customTipValue;
// //     }else {
// //       document.getElementById('errorTip').innerHTML="can't be invalid";
// //         tipCustom.classList.add('input-error');
// //     }
// //
// //   })
// // }
// tipsCalculations();
// //customTips();
// function reflesh(){
// billInput.textContent='';
// peopleInput.textContent="";
// tipInput.reset();
// }
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
// Event listener for bill input to clear errors and reset tips on re-entry
billInput.addEventListener('input', () => {
  clearError(billErrorDisplay, billInput);  // Clear the bill input error
});

// Event listener for people input to clear errors and reset tips on re-entry
peopleInput.addEventListener('input', () => {
  clearError(peopleErrorDisplay, peopleInput);  // Clear the people input error
});

tipCustomInput.addEventListener('input', () => {
  clearError(customTipErrorDisplay, tipCustomInput);  // Clear custom tip input error
});

// Helper function to clear the error display and reset input field styles
function clearError(errorDisplay, inputField) {
  errorDisplay.textContent = '';  // Clear the error message
  inputField.classList.remove('input-error');  // Remove error highlight
}
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

//add addEventListener to tips buttons

tipbtns.forEach((button) => {
  button.addEventListener('click',()=>{
    const percent = parseInt(button.value);
    const tip = tipsCalculations(percent);
  })
});
//add addEventListener for custom tips
tipCustomInput.addEventListener('input',()=>{
  const customPercent = parseFloat(tipCustomInput.value);

  if(!isNaN(tipCustomInput) && (tipCustomInput > 0) && (customPercent < 100) ){
   tipCustomInput.style.cursor='pointer';

   tipCustomInput.addEventListener('click',()=>{
     tipsCalculations(customPercent);
   })
 }else {

   errorsDisplay(customTipErrorDisplay,tipCustomInput,"can't be invalid");

      }
})

function errorsDisplay(text,field,message){
  text.innerHTML = message;
  field.classList.add('input-error');
}
// Event listener for bill input to clear errors and reset tips on re-entry
billInput.addEventListener('input', () => {
  clearError(billErrorDisplay, billInput);  // Clear the bill input error
});

// Event listener for people input to clear errors and reset tips on re-entry
peopleInput.addEventListener('input', () => {
  clearError(peopleErrorDisplay, peopleInput);  // Clear the people input error
});

// Event listener for custom tip input to clear errors and reset tips on re-entry
tipCustomInput.addEventListener('input', () => {
  clearError(customTipErrorDisplay, tipCustomInput);  // Clear custom tip input error
});
// Helper function to clear the error display and reset input field styles
function clearError(errorDisplay, inputField) {
  errorDisplay.textContent = '';  // Clear the error message
  inputField.classList.remove('input-error');  // Remove error highlight
}

// Modified resetTips function to clear inputs and reset display
function resetTips() {
  tipAmntDisplay.innerHTML = '$0.00';
  totalAmntDisplay.innerHTML = '$0.00';
  billInput.value = '';
  peopleInput.value = '';
  tipCustomInput.value = '';
  clearError(billErrorDisplay, billInput);
  clearError(peopleErrorDisplay, peopleInput);
  clearError(customTipErrorDisplay, tipCustomInput);
}

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
  resetTips();
});
