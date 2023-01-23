//Reverse string with predefined methods
let str ="Harshal";
let splitstr= str.split("");
let reversestr = splitstr.reverse();
let joinstr = reversestr.join("");
console.log(joinstr);


//Reverse using for loop
let str = prompt("enter string")

let newstring="";
for (let i= str.length-1; i>=0; i--){
    newstring += str[i]
}
console.log(newstring);