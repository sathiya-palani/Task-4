
// Arrow Function
// Convert all the strings to title caps in a string array


 let title = ((str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })    ("sathiya is my name");
  console.log(title);       