import { User } from "../../API/users/usersModel";
import PrefferanceModel from "../../API/prefferanceUser/prefferanceModel";

function userProfileData() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");

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
        renderProfile(data["userCard"][0]);
      });

    console.log();
  } catch (error) {}

  function renderProfile(data: any) {
    const html = `
  <div class="mainNav">
    <nav class="navBar">
         <ul class="navBar__ul">
             <li class="navBar__ul__li" id="info">Info</li>
             <li class="navBar__ul__li" onclick="findMatch(${data.id})">Find Match</li>
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
  
  <div class="usersCard"></div>`;

    const body = document.querySelector("body") as HTMLBodyElement;
    body.innerHTML = html;
  }
}

function findMatch(userId: string) {
  try {
    getUsers(userId);
  } catch (error) {
    console.error(error);
  }
  
}

function getUsers(userId:string) {
  try {
    fetch("/api/users/getusers")
      .then((res) => res.json())
      .then(({ users }) => {
        try {
          if (!users) throw new Error("didnt find users");
          console.log(users);
         renderUsers(users,userId);
        } catch (error) {
          console.error(error);
        }
      });
  } catch (error) {
    console.error(error);
  }
}

function renderUsers(users: Array<User>,userId:string) {
  try {
    if (!users) throw new Error("No users");
    const html = users
      .map((user) => {
        if (
          user.email != new URLSearchParams(window.location.search).get("email")
        )
          return renderUser(user, userId);
      })
      .join(" ");
    const usersCard = document.querySelector(".usersCard");
    if (!usersCard) throw new Error("coundnt find users ecard on DOM");
    usersCard.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderUser(user: User, userId:string) {
  try {
    const matchingPercentage= getPrefferance(user,userId);
    if(matchingPercentage !=0)
    return `<div class="userCard">
              <h3>Name:${user.name}</h3>
              <h4>Is a match?:match of ${matchingPercentage}%</h4>
              <p>Height: ${user.height}</p>
              <p>Age: ${user.age}</p>
              <p>Location: ${user.location}</p>
              
              <p>Job: ${user.job}</p>
              <p>Smoking: ${user.smoking}</p>
              <p>Kids: ${user.kids}</p>
              <p>Education: ${user.education}</p>
              <p>Religious level: ${user.religious}</p>
              <p>More about me: ${user.info}</p>
            </div>`;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function getPrefferance(user:User, userId:string) {
  fetch("/api/prefferance/get-user-prefferance")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return matchingPercent(data,user);
    });
}

function matchingPercent(data:any, user:User):number {
  
  var percentOfMatching:number =10;

if (user.gender!= data.gender)
    return 0;
if( user.relationship != data.relationship) 
    return 0;   
  if (user.height>= data.minHeight && user.height<= data.maxHeight)
    percentOfMatching+=10;
  if (user.age>= data.minAge && user.age<= data.maxAge)
    percentOfMatching+=10;
  //if (user.bodyType == data.bodyType || data.bodyType=="all")
   // percentOfMatching+=10;
  if (user.kids== data.kids)
    percentOfMatching+=10;  
  if (user.smoking== data.smoking || data.smoking=="sometime")
    percentOfMatching+=10;
  if (user.education == data.education)
    percentOfMatching+=10;
  if (user.religious == data.religious)
    percentOfMatching+=10;  
    
  return percentOfMatching;
}
