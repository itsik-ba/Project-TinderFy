// creat the form for register + option to change to sign in only
function handleCreatMyForm() {
    try {
        var newDiv = document.createElement("div");
        newDiv.classList.add(".newdiv");
        var myForm = "<form onsubmit = \"handleRegister(e)\"  class=\"registerForm\">\n        <h2 class=\"registerForm__h2\">Register Here</h2>\n        <label class=\"registerForm__label\" for=\"name\">Name:</label>\n        <input class=\"registerForm__input\"  type=\"text\" name=\"name\" placeholder=\"enter name\">\n        <label class=\"registerForm__label\"  for=\"email\">Email:</label>\n        <input class=\"registerForm__input\" type=\"email\" name=\"email\" placeholder=\"enter email\">\n        <label class=\"registerForm__label\"  for=\"password\">Password:</label>\n        <input class=\"registerForm__input\" type=\"password\" name=\"password\" placeholder=\"enter password\">\n        <button class=\"registerForm__btn\" type=\"submit\">Register</button>\n        </form>";
        var container = document.querySelector(".container");
        if (!container)
            throw new Error("couldent find main container");
        if (!myForm)
            throw new Error("couldent find myForm");
        if (!newDiv)
            throw new Error("couldent find newDiv");
        container.appendChild(newDiv);
        newDiv.innerHTML = myForm;
    }
    catch (error) {
        console.error(error);
    }
}
// the register function
function handleRegister(e) {
    e.preventDefault();
    console.log(e);
    console.log("form register working");
}
// the sign in function
// function handleSignIn(){
// }
