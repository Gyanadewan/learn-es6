const swapValues = (a,b) => {
     [b,a] = [a,b]
     return [b,a]
   
}

console.log(swapValues(5, 10))