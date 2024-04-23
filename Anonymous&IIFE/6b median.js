//Anonymous&IIFE/5b palindrome.js
//Return median of two sorted arrays of same size

const median = (function(a, b)  {
    let c = [...a, ...b].sort((a,b) =>a-b);
    const half = c.length / 2 | 0;
    if (c.length % 2) return c[half];
    return (c[half] + c[half-1])/2;
})
let a=[1,8,6];
let b=[9,8,7];
console.log(median(a,b));