const getHighestSalary = (employees)=>{
  const highSalaryMan = employees.reduce((highest,employe) => {
    if(employe.salary > highest.salary){
        return employe;
  }
  else {
       return highest;
  }
   })
   return highSalaryMan
}

const employees = [
  { name: "Rahim", salary: 25000 },
  { name: "Karim", salary: 32000 },
  { name: "Sakib", salary: 28000 },
  { name: "Nayeem", salary: 40000 }
];
console.log("Takar malik re tui:",getHighestSalary(employees))





const numbers = [10,20,30,40,50];
function  addCalculation(numbers){
    const sum = numbers.reduce((prevValue, curentvalue)=>{
    return prevValue + curentvalue
      },0)
      return sum;
}

console.log(addCalculation(numbers))