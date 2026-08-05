const numbers = [10,20,30,40,50];
const total = numbers.reduce((accumulator, num) => {
    return accumulator + num;
},0)
console.log(total)