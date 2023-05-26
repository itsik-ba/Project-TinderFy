function userProfileData(){
try {


fetch("/api/users/main", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json()) 
    .then((data) => {
      console.log(data);
    
    }) 

    console.log()
} catch (error) {
    
}
  
 const html = `
    <div class="mainNav">
    <nav class="navBar">
         <ul class="navBar__ul">
             <li class="navBar__ul__li">Info</li>
             <li class="navBar__ul__li">Finde Match</li>
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

         <div class="userProfileContainer">
            <p>Name:</p>
            <p>Subscribed:</p>
            <p>Age: </p>
            <p>Gender: </p>
            

  </div>

      `
      const body = document.querySelector("body")as HTMLBodyElement;
      body.innerHTML = html;
  }
  
