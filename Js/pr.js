 
   const texts = [
      "Hello JavaScript!",
   ]
 const handleTextButton = () => {
   const container = document.getElementById("container")
   const div = document.createElement("div")
   div.innerHTML = `
       <h1>${texts}</h1>
     
      
   `
   container.appendChild(div)
 }

 handleTextButton()