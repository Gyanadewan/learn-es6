// Task: Return a new array with each number doubled
const doubleNumbers = (numbers) => {
const singleNumbers =  numbers.forEach(num => {
     return num * 2;
  });
  return singleNumbers;
};

// Junior's test
console.log(doubleNumbers([1, 2, 3]));