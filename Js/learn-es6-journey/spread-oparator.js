let numbers = [10,20,30];
let newNumbers = [...numbers,"new number add korlam->",40]
console.log(newNumbers)


let fruits = ["Apple", "Mango"];
let vegetables = ["Potato", "Tomato"];

let food = [...fruits, ...vegetables];

console.log(food);



let arr1 = [1, 2];
let arr2 = [...arr1, 3];
let arr3 = [0, ...arr2, 4];

console.log(arr3);