

const  buildProfileCard = (user)=>{
   return (`name: ${user.name}, title: ${user.title}, company: ${user.company} `)
}
console.log (buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }))