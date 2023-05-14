// creat the form for register + option to change to sign in only
// function handleCreatMyForm(){
//     try {
//         const myForm = `<form onsubmit= "handleRegister(event)" class="registerForm">
//         <h2 class="registerForm__h2">Register Here</h2>
//         <label class="registerForm__label" for="name">Name:</label>
//         <input class="registerForm__input"  type="text" name="name" placeholder="enter name">
//         <label class="registerForm__label"  for="email">Email:</label>
//         <input class="registerForm__input" type="email" name="email" placeholder="enter email">
//         <label class="registerForm__label"  for="password">Password:</label>
//         <input class="registerForm__input" type="password" name="password" placeholder="enter password">
//         <button class="registerForm__btn" type="submit">Register</button>
//         </form>
//         <div class="moveToSignIn"><button class="moveToSignIn__btn" onclick="handleSignIn()">sign-in</button></div>
//         `
//        const container = document.querySelector(".container")as HTMLDivElement | null;
//        if(!container)throw new Error("couldent find main container");
//        container.innerHTML = myForm
//       } catch (error) {
//       console.error(error)  
//     }
// }
// the sign in function
function handleSignIn() {
    try {
        var container = document.querySelector(".container");
        if (!container)
            throw new Error("couldent find main container");
        var signIn = "<form onsubmit= \"handleLogin(event)\" class=\"registerForm\">\n    <h2 class=\"registerForm__h2\">Sign In Here</h2>\n    <label class=\"registerForm__label\" for=\"name\">Name:</label>\n    <input class=\"registerForm__input\"  type=\"text\" name=\"name\" placeholder=\"enter name\">\n    <label class=\"registerForm__label\"  for=\"password\">Password:</label>\n    <input class=\"registerForm__input\" type=\"password\" name=\"password\" placeholder=\"enter password\">\n    <button class=\"registerForm__btn\" type=\"submit\">sign-in</button>\n    </form>\n    <div class=\"moveToRegister\"><button class=\"moveToRegister__btn\" onclick=\"handleCreatMyForm()\">go register</button></div>\n    ";
        container.innerHTML = signIn;
    }
    catch (error) {
        console.error(error);
    }
}
