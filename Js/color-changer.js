        // use  variable  and using addEventListener
  const btn1 =  document.getElementById("btn-1")
  btn1.addEventListener("click",()=>{
    document.body.style.backgroundColor ="blue"
  })
        // use simple EventListener
   document.getElementById("btn-2").addEventListener("click",()=>{
    document.body.style.backgroundColor ="yellow"
   })
 
   // use Onclick function 
   const handleBtn3=()=>{
    document.body.style.backgroundColor = "red"
  }

  // use this code normal function
  function handleBtn4(){
     
    document.body.style.backgroundColor = "skyblue"
}