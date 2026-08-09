

const getMostExpensiveProduct = (product) =>{
    const keys = Object.keys(product);
    let highest = 0;
    let expensiveProductName = ""

    for (let key of keys ){
      if (highest < product [key]){
        highest = product[key];
         expensiveProductName = key
      }
    }
    return expensiveProductName;
}

console.log(getMostExpensiveProduct({pen: 20, book: 150, bag:500, bat: 750, laptop: 30000}))




const user= {
   name : "Gyana",
   address : null
}
const getCity = (user) => {
 console.log(user.address?.city)
}
getCity (user)