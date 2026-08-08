
const  calculateShiping = (orderAmount,shippingFee=60)=> {
    if (orderAmount >= 1000){
      return "free shipping"
    }
    else {
        return `shipping fee : ${shippingFee} taka`
    }
}
console.log(calculateShiping(50))