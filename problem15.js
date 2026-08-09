

let a = 5;
let b = 10;
[b,a]= [a,b]
console.log(b,a)



let nums = [10,23,45,34,22,2];
let [first,second,...rest] = nums;
// console.log(first)
// console.log(first,second)
console.log(first,second,rest)