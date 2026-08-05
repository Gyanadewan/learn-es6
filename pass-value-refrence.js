
//Pass by value (primitive types)


let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);


// refrence type (object,Array,Function)

const person = {
    name : "Gyana"
};

const another = person;
another.name = "Rahim";
console.log(person.name);



const updateUser =(user) =>{
    user.name ="karim"
    
}

const person2 ={
    name: "Gyana"
};

updateUser (person2)
console.log(person2.name);