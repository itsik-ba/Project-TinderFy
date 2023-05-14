// creat the form for register + option to change to sign in only
// function handleCreatMyForm(){






// }

// the sign in function
function handleSignIn(){
  try {
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




