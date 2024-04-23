// IIFE function
//Remove duplicates from an array

let a = (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }) ([1,2,3,4,2,5,5,4])
  