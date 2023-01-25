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

//Find duplicate items from array
let array = [1, 3, 5, 7, 1, 3, 5, 7, 9];
const dups= array.filter((ele,index,arr)=> arr.indexOf(ele)!==index);
console.log(dups);

//Max number in array
let array = [1, 3, 5, 7, 1, 3, 5, 7, 9];
let maxnum = array.reduce((pre, curr)=> curr>pre? curr: pre);
console.log(maxnum);

//or 
let maxnum  = Math.max(...array);
console.log(maxnum);

//Second largest value im array
let array = [1, 3, 5, 7, 1, 3, 5, 7, 9];
let maxnum = Math.max(...array);
let index = array.indexOf(maxnum);
array.splice(index,1)
let newmax = Math.max(...array)
console.log(newmax)

//Missing value in an array
let array = [1, 3, 5, 7, 1, 3, 5, 7, 9];
let misarray=[];
let maxnum = Math.max(...array);
let minnum = Math.min(...array);
for(i=minnum; i<maxnum;i++){
  if(array.indexOf(i)<0){
    misarray.push(i)
  }
}
console.log(misarray);

//Even odd
let array = [1, 2, 4, 3, 5, 7, 1, 3, 5, 7, 9];
const odd= array.filter((item)=> item%2 ===1);
console.log(odd);
const even= array.filter((item)=> item%2 ===0);
console.log(even);

