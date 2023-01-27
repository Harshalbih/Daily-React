//Swap variables
let a = prompt("Enter first var");
let b = prompt("Enter second var");

let temp;
temp = a;
a = b;
b = temp;

console.log(`Swapped value of a is ${b}`);
console.log(`Swapped value of b is ${a}`);

//Least num 
function min(a, b) {
	return a < b ? a : b;
}