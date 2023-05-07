// creat the form for register + option to change to sign in only
function handleCreatMyForm(){
    try {
        const myForm = `<form onsubmit= "handleRegister(event)"  class="registerForm">
        <h2 class="registerForm__h2">Register Here</h2>
        <label class="registerForm__label" for="name">Name:</label>
        <input class="registerForm__input"  type="text" name="name" placeholder="enter name">
        <label class="registerForm__label"  for="email">Email:</label>
        <input class="registerForm__input" type="email" name="email" placeholder="enter email">
        <label class="registerForm__label"  for="password">Password:</label>
        <input class="registerForm__input" type="password" name="password" placeholder="enter password">
        <button class="registerForm__btn" type="submit">Register</button>
        </form>
        <div class="moveToSignIn"><button class="moveToSignIn__btn" onclick="handleSignIn()">sign-in</button></div>
        `
       const container = document.querySelector(".container")as HTMLDivElement | null;
       if(!container)throw new Error("couldent find main container");
      container.innerHTML = myForm
        
      } catch (error) {
      console.error(error)  
    }
   
}

// the sign in function
function handleSignIn(){
  try {
    console.log("sign in function")
    const container = document.querySelector(".container")as HTMLDivElement | null;
    if(!container)throw new Error("couldent find main container");
     const signIn = `<form onsubmit= "handleLogin(event)" class="registerForm">
    <h2 class="registerForm__h2">Sign In Here</h2>
    <label class="registerForm__label" for="name">Name:</label>
    <input class="registerForm__input"  type="text" name="name" placeholder="enter name">
    <label class="registerForm__label"  for="password">Password:</label>
    <input class="registerForm__input" type="password" name="password" placeholder="enter password">
    <button class="registerForm__btn" type="submit">sign-in</button>
    </form>
    <div class="moveToRegister"><button class="moveToRegister__btn" onclick="handleCreatMyForm()">go register</button></div>
    `
      container.innerHTML = signIn
    } catch (error) {
    console.error(error)
  }
  
  
}

// the register function
function handleRegister(event: any){
  event.preventDefault()
 try {
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  const userLogin = {name, email, password}
  if(!name)throw new Error("cant find user name")
  if(!email)throw new Error("cant find user email")
  if(!password)throw new Error("cant find user password")
   
  handleSignIn();
   fetch("/api/users/add-user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLogin),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

    })
   } catch (error) {
  console.error(error)
}
     
}

// the sign - in

function handleLogin(event: any){
  event.preventDefault()
  try {
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;
    const userLogin = {name, password}
    if(!name)throw new Error("cant find user name")
    if(!password)throw new Error("cant find user password")
     console.log(userLogin)

     fetch("/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        window.location.href = "app.html"
      })
     
  } catch (error) {
    console.error(error)
  }
    console.log("test")
}