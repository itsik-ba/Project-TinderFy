
// the register function
function handleRegister(event: any) {
  event.preventDefault()
  try {
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const userLogin = { name, email, password }
    if (!name) throw new Error("Name Requierd")
    if (!email) throw new Error("cant find user email")
    if (!password) throw new Error("cant find user password")


    fetch("/api/users/register", {
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

}


// the sign - in

function handleLogin(event: any) {
  event.preventDefault()
  try {
    const name = event.target.elements.name.value;
    const password = event.target.elements.password.value;
    const userLogin = { name, password }
    const htmlEror = document.querySelector("#error") as HTMLHeadElement;
    if (!name) throw new Error("user name is not valid"); {

      htmlEror.innerHTML = "Name Error"
    }

    if (!password) throw new Error("cant find user password")


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
        window.location.href = "main.html"


      })

  } catch (error) {
    console.error(error)
  }

}