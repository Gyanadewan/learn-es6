const numbers = [10,20,30,40,50];
const [ten, twenty, , , fifty] = numbers;

console.log(ten, twenty, fifty);


const student ={
    name : "kamal",
    roll : 2,
    age : 20
}
// const name = student.name
// const roll = student.roll
// const age = student.age

const {age,name} =student
console.log(age,name)