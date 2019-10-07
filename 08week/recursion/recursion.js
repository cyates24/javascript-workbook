let exponent = (c, n) => {
  if (n === 0) 
  {
   return 1;
   }
 else 
 {
   return c * exponent(c, n-1);
 }
};

console.log(exponent(5, 3));


let arraySum = (myArray) => {
 if (myArray.length === 1) {
   return myArray[0];
 }
 else {
   return myArray.pop() + arraySum(myArray);
 }
};

console.log(arraySum([24,45,34,69,55,69,71,86]));