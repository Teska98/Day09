// Only change code below this line
   function myForLoop1(){
     for (var evenNumbers = 0; evenNumbers <= 8; evenNumbers++) {
  if (evenNumbers % 2 == 0) {
    return evenNumbers;
     }
  }
  function myForLoop2(){
      for (var evenInverseNumbers = 0; evenInverseNumbers <= 8; evenInverseNumbers--) {
  if (evenInverseNumbers % 2 == 0) {
    return evenInverseNumbers;
     } 
   }
// Only change code above this line
module.exports = {
  myForLoop1,
  myForLoop2
};  
