//remove duplicate elements from array
const arr = [1, 1, 2, 2, 3, 4];
let dup = [...new Set(arr)];
console.log(dup);

//or

const array = [1, 1, 2, 2, 3, 4];
function dupl(array) {
  return array.filter(function (item, pos) {
    return array.indexOf(item) == pos;
  });
}
console.log(dupl(array));


//Unique Item in array
let a = [1, 3, 5, 7, 1, 3, 5, 7, 9];

function lonelyinteger(a) {
  return a.reduce((unq, curr) => unq ^ curr); //XOR Alt+94 ^
}

console.log(lonelyinteger(a));
