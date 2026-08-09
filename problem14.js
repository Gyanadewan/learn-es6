

const  responseExtractor = (obj) => {
//    const {user:{name,age}} = obj;
const {user:{name,age=19}}= obj;
   console.log(name,age)
}
responseExtractor({user:{name: "Rafi",age:29}});
responseExtractor({user:{name: "Rafi",}});