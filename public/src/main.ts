function userProfileData(){
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
            <p>Name: DATABASE</p>
            <p>Last Name: DATABASE</p>
            <p>Age: DATABASE</p>
            <p>Gender: DATABASE</p>
            

  </div>

      `
      const body = document.querySelector("body")as HTMLBodyElement;
      body.innerHTML = html;
  }
  
