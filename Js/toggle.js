// let isDark = false

// document.getElementById("btn-toggle")
// .addEventListener("click",()=>{
//     if(isDark){
//         document.body.style.backgroundColor = "white"
//     }
//     else{
//         document.body.style.backgroundColor = "black";
//     }
//     isDark = ! isDark
// })

//simple clean es6 version
let isDark = false

document.getElementById("btn-toggle")
.addEventListener("click", () => {
    isDark = !isDark;

    document.body.style.backgroundColor = isDark ? "black" : "white";
});