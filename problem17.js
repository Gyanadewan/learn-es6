

let  applyDiscount = (price, discountRate=0)=>{
 let priceAfterDiscount = price.map((elem)=>{
    
    const discountedPrice=elem -((elem*discountRate)/100)
    return discountedPrice;
 })
 return priceAfterDiscount;
}

let productPrice = [500,1000,400,700]
console.log(applyDiscount(productPrice,10))
console.log(productPrice)






let getPassingStudents = (students, threshold) =>{
  let filterStudennts = students.filter(student =>{
    if (student.marks >= threshold){
       return true;
    }
    else {
        return false
    }
  })
    return filterStudennts;
}

let students = [
    {name: "Rafi", marks: 75},
    {name: "karim", marks: 40},
    {name: "jabed", marks: 60},
    {name: "Rahul", marks: 60},

]

console.log(getPassingStudents(students,50))
