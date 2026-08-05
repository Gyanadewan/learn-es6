const greetUser =(name)=>{
    console.log(`Hello, ${name}`)
}
const users = (ab) =>{
    const name = "Dhon bhai"
    ab(name)
}

users (greetUser)



const  addNumbers = (num1,num2) =>{
     const result = num1 + num2
     console.log(result)
}

const passNumber = (num) => {
      num (5,8)
}

passNumber (addNumbers)