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
            //  window.location.href = "app.html"
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
            // window.location.href = "main.html"
            console.log("sdfdsfsdfsdfsdfsf");
        });
    }
    catch (error) {
        console.error(error);
    }
}
