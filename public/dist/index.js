// creat the form for register + option to change to sign in only
function handleCreatMyForm() {
    try {
        var myForm = "<form onsubmit= \"handleRegister(event)\"  class=\"registerForm\">\n        <h2 class=\"registerForm__h2\">Register Here</h2>\n        <label class=\"registerForm__label\" for=\"name\">Name:</label>\n        <input class=\"registerForm__input\"  type=\"text\" name=\"name\" placeholder=\"enter name\">\n        <label class=\"registerForm__label\"  for=\"email\">Email:</label>\n        <input class=\"registerForm__input\" type=\"email\" name=\"email\" placeholder=\"enter email\">\n        <label class=\"registerForm__label\"  for=\"password\">Password:</label>\n        <input class=\"registerForm__input\" type=\"password\" name=\"password\" placeholder=\"enter password\">\n        <button class=\"registerForm__btn\" type=\"submit\">Register</button>\n        </form>\n        <div class=\"moveToSignIn\"><button class=\"moveToSignIn__btn\" onclick=\"handleSignIn()\">sign-in</button></div>\n        ";
        var container = document.querySelector(".container");
        if (!container)
            throw new Error("couldent find main container");
        container.innerHTML = myForm;
    }
    catch (error) {
        console.error(error);
    }
}
// the sign in function
function handleSignIn() {
    try {
        console.log("sign in function");
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
// the register function
function handleRegister(event) {
    event.preventDefault();
    try {
        var name = event.target.elements.name.value;
        var email = event.target.elements.email.value;
        var password = event.target.elements.password.value;
        var userLogin = { name: name, email: email, password: password };
        if (!name)
            throw new Error("cant find user name");
        if (!email)
            throw new Error("cant find user email");
        if (!password)
            throw new Error("cant find user password");
        handleSignIn();
        fetch("/api/users/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// the sign - in
function handleLogin(event) {
    event.preventDefault();
    try {
        var name = event.target.elements.name.value;
        var password = event.target.elements.password.value;
        var userLogin = { name: name, password: password };
        if (!name)
            throw new Error("cant find user name");
        if (!password)
            throw new Error("cant find user password");
        console.log(userLogin);
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            window.location.href = "app.html";
        });
    }
    catch (error) {
        console.error(error);
    }
    console.log("test");
}
