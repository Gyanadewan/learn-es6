
let findUserById = (users, id) =>{
   let expectedUser = users.find(user => {
    return user.id=== id
   })
   if (!expectedUser)return "not found"
   return expectedUser;
}

let users = [
 {id:1, name: "asad"},
 {id:2, name: "Rafi"},
 {id:2, name: "jamal"},
 {id:3, name: "kamal"},
]
console.log(findUserById(users,23))



let getCartTotal = (cart)=>{
    let total = cart.reduce((accu, elem)=>{
        return accu + (elem.price*elem.qty)
    },0)
    return total;
}



let cart = [ 
  {name: "pen",price: 20, qty: 3},
  {name: "notebook",price: 50, qty: 2},
  {name: "speaker",price: 250, qty: 2},
  {name: "light",price: 200, qty: 1}
]


console.log(getCartTotal(cart))