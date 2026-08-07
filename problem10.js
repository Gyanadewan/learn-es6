 function cloneAndUpdate (arr,index,newValue){
   const update = [...arr]
   update[index] = newValue
 }

console.log(cloneAndUpdate([5, 10, 15], 1, 99))