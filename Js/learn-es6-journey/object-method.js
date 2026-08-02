

const user = {
    name: "jamal",
    age : 35,
    id : 40003
}

const key = Object.keys(user)
const value = Object.values(user)
const entries = Object.entries(user)

console.log(entries)


for (let elem of entries){
    const [key,value] = elem;
    console.log(key,value)
}


delete user.age
console.log(user)



const bankAccount  = {
    accountNumber : "1234",
    balance : 5000
}

Object.seal(bankAccount)
delete bankAccount.balance;
bankAccount.balance = 300
console.log(bankAccount)



const bithCertificat ={
    name : "Gyana",
    birthDate: "05-06-2005",
    cerNumber : "456677327869"
}

Object.freeze(bithCertificat)
delete bithCertificat.name
bithCertificat.cerNumber = "123"
bithCertificat.new = "test"
console.log(bithCertificat)