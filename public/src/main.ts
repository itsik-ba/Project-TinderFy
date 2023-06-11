
function userProfileData() {
  try {

    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    fetch("/api/users/main", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        renderProfile(data["userCard"][0])

      })

    console.log()
  } catch (error) {

  }

  function renderProfile(data: any) {
    const html = `
  <div class="mainNav">
    <nav class="navBar">
         <ul class="navBar__ul">
             <li class="navBar__ul__li" id="info">Info</li>
             <li class="navBar__ul__li">Find Match</li>
             <li class="navBar__ul__li">Messages</li>
             <li class="navBar__ul__li">Subscribe</li>
         </ul>
       </nav>  

  
        <div class="mainNav__userCard">
         <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/JenniferAnistonFeb09.jpg" alt="JenniferAniston pic" class="mainNav__userCard__img">
            <h2 class="mainNav__userCard__h2"  style="color: red;" id="h2User"></h2>
                <div class="edit" onclick="editUser()"></div>
                <div class="delete" onclick="deleteUser()"></div>
                <div class="imageUpload" onclick="imageUpload()"></div>
      </div>
         <div class="userProfileContainer">
            <p>Name:${data.name}</p>
            <p>Subscribed: ${data.subscribed}</p>
            <p>Age: ${data.age}</p>
            <p>Gender: ${data.gender}</p>
          </div>

  </div>





`


      
    const body = document.querySelector("body") as HTMLBodyElement;
    body.innerHTML = html;
  }


}

function renderAllProfile(){



}