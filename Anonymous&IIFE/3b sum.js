// IIFE function
// sum off all numbers in array

let sum = (function(array){
    let sum = 0;
         for(let i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4])
    console.log(sum);