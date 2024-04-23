// Arrow function 
// sum off all numbers in array
const sumOfArray = (()=>{
    let a = [1,2,3,4];
    let sum = 0;
         for(let i = 0 ; i < a.length ; i++){
            sum = sum + a[i];
          }
          console.log(sum);
          })
          sumOfArray(); 
          
          