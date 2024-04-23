//Anonymous function
//sum of all numbers in array

var array = [1,2,3];
let sumOfArray = function(arr){
          var sum = 0;
          for(let i = 0 ; i < arr.length ; i++){
              
             sum = sum + arr[i];
           }
           console.log(sum);
     }
     sumOfArray(array);