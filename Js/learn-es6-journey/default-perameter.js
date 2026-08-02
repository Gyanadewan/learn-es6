
function checkAge (age=20){
     return  age + 5
}

console.log((checkAge()))


 function numberCheck (num = 2){  //ei kane default perameter 2 deya hoyeche 
    if (num % 2 === 0){
        return "jor songkya"
    }
    else {
        return "bijor songkya"
    }
}

console.log(numberCheck (30)) // default perameter tokon kaj korbe jokon  argument  debo nah
   