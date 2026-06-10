const findLargest =(a,b,c)=>{
      const result = a > b
        ? (a > c ? a : c)
        : (b > c ? b : c);
    return result
}
console.log(findLargest(10,8,9))