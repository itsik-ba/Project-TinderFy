
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
      //  window.location.href = "app.html"
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
          // window.location.href = "main.html"
          console.log("sdfdsfsdfsdfsdfsf")
      })
       
    } catch (error) {
      console.error(error)
    }
      
  }