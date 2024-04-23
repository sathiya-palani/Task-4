//Anonymous function
//Retrun all the palindromes in an array

let palindrome = function(){
    var a=["java","madam","eye"]
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i])
    }}() 
