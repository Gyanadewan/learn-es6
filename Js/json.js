
const gethandler = () =>{
   fetch ('https://jsonplaceholder.typicode.com/users')
   .then(res=> res.json())
   .then(data => showData(data))
}


const showData = (users) =>{
    const container = document.getElementById("mainContainer")

    users.forEach(user => {
        const div = document.createElement("div")

        div.innerHTML = `
         <div class ="bg-yellow-100 border border-red-300 rounded-md p-2 mx-6 "> 
         <h2>${user.name}</h2>
         <p>${user.email}</p>
         <p>${user.phone}</p>
         </div>
        `

        container.appendChild(div)
    });
  
}



