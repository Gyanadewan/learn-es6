const people = [
    {name: "samal", age: 15},
    {name: "kamal", age: 17},
    {name: "jamal", age: 21},
]

// const result = people.find(parson => parson.age> 18 )
// console.log(result.name)

const result = people.find(parson => parson.age > 18)
console.log(result.name)