
const  calculateShiping = (orderAmount,shippingFee=60)=> {
    if (orderAmount >= 1000){
      return "free shipping"
    }
    else {
        return `shipping fee : ${shippingFee} taka`
    }
}
console.log(calculateShiping(50))



const getGrade = (mark)=>{
//  if (typeof mark != "number"){
//     return "Invalid"
//  }
//  if (mark >= 90){
//     return "A+"
//  }
//  else if (mark >=80){
//     return "A"
//  }
// else if (mark >=60){
//     return "B+"
// }
// else if (mark >= 40){
//     return "B"
// }
// else if (mark >=33){
//     return "D"
// }
// else {
//     return "Fail"
// }
return typeof mark !="number" ?"Invalid" : mark >= 90?"A+": mark>=80?"A":mark>=60?"B+": mark>=40?"B": mark>=33?"D": "Fail"
}
console.log(getGrade(90))
console.log(getGrade(80))
console.log(getGrade("helo"))
console.log(getGrade(40))
console.log(getGrade(20))
