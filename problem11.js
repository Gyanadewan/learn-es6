
// function calculateTotal (discount,...pricess){
//    let total = 0;
//    for (let i = 0; i<pricess.length; i++){
//      total += pricess[i]
//    }
//    let discountAmount = (total*discount)/100;
//    let totalAfterDiscountApply = total - discountAmount;
//    return totalAfterDiscountApply
// }

// console.log(calculateTotal(10, 100, 200, 50, 300));

function calculateTotal (discount,...pricess){

    let total = pricess.reduce((accumulator,currentValue
    )=> accumulator + currentValue,0)

    let discountAmount = (total * discount)/100;
    let totalAfterDiscountApply = total - discountAmount
    return totalAfterDiscountApply;
}


console.log(calculateTotal(10, 100, 200, 50, 300));