
function renderUserPage(){
const h2User = document.querySelector("h2User")as HTMLHeadElement|null;

try {
    
    fetch("/newProfile", {
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
       
    } catch (error) {
      console.error(error)
    }
      
  }



  
