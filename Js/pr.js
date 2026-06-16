 
   const texts = [
      "Hello JavaScript!",
   ]
   const handleTextButton = () => {
   const container = document.getElementById("container")
    const h1 = document.createElement("h1")
   h1.innerHTML = `
       <h1>${texts}</h1>
     
      
   `
   container.appendChild(h1)
 }

 handleTextButton()