const gethandler = () =>{
   fetch ('https://jsonplaceholder.typicode.com/users')
   .then(res=> res.json())
   .then(data => showData(data))
}


const showData = (users) =>{
    const container = document.getElementById("container")

    users.forEach(user => {
        const div = document.createElement("div")

        div.innerHTML = `
          <h2>${user.name}</h2>
         <p>${user.email}</p>
         <p>${user.phone}</p>
        `

        container.appendChild(div)
    });
  
}


gethandler()

