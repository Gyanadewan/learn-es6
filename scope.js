
// Global scope
let name = "Gyana" // ei variable te global declare kora hoyeche

function showName (){
    console.log(name)
}

showName()
 console.log(name)



//  function scope

 function test (){
    var age = 20; 
    console.log(age)
 }

 test()
// console.log(age) // function er vaire teke access kora jabe nah Error dibe


if (true){
    let city = "chattogram";
    console.log(city)
}
 
// console.log(city) //error 


if (true){
    const country = "Bangladesh";
    console.log(country)
}

// console.log(country) // error


if (true){
    var country = "Bangladesh"; // var block scope mane nah
}

console.log(country) // output dekabe