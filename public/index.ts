// creat the form for register + option to change to sign in only
function handleCreatMyForm(){
    try {
       const newDiv = document.createElement("div")
        newDiv.classList.add(".newdiv")
        const myForm = `<form onsubmit="handleRegister(e)  class="registerForm">
        <h2 class="registerForm__h2">Register Here</h2>
        <label class="registerForm__label" for="name">Name:</label>
        <input class="registerForm__input"  type="text" name="name" placeholder="enter name">
        <label class="registerForm__label"  for="email">Email:</label>
        <input class="registerForm__input" type="email" name="email" placeholder="enter email">
        <label class="registerForm__label"  for="password">Password:</label>
        <input class="registerForm__input" type="password" name="password" placeholder="enter password">
        <button class="registerForm__btn" type="submit">Register</button>
        </form>`
        const container = document.querySelector(".container")as HTMLDivElement | null;
       if(!container)throw new Error("couldent find main container");
       if(!myForm)throw new Error("couldent find myForm");
       if(!newDiv)throw new Error("couldent find newDiv");
        container.appendChild(newDiv)
        newDiv.innerHTML = myForm
     } catch (error) {
      console.error(error)  
    }
   
}



// the register function
function handleRegister(e: any){
  e.preventDefault()
  console.log(e)
console.log("form register working")



}



// the sign in function
// function handleSignIn(){
    
// }