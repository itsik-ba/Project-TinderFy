
// fetch all the info from the form 
function createMyCard(event: any){
    event.preventDefault()
    
try {
    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const gender = event.target.elements.gender.value;
    const location = event.target.elements.location.value;
    const height = event.target.elements.height.value;
    const weight = event.target.elements.weight.value;
    const kids = event.target.elements.kids.value;
    const intrested = event.target.elements.intrested.value;
    const info = event.target.elements.info.value;
    const userCard = {name, age, gender, location, height, weight, kids, intrested, info}
    if(!userCard)throw new Error("cant find userCard Value's")
      
    fetch("/api/profileUser/newProfile", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCard),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          myPreferences()
        })


} catch (error) {
  console.error(error)  
}
}


function createMyPrefferance(event: any){
  event.preventDefault()
  try {
  
    const height = event.target.elements.height.value;
    const bodytype = event.target.elements.bodytype.value;
    const kids = event.target.elements.kids.value;
    const smoking = event.target.elements.smoking.value;
    const hangout = event.target.elements.hangout.value;
    const education = event.target.elements.education.value;
    const job = event.target.elements.job.value;
    const relationship = event.target.elements.relationship.value;
    const politics = event.target.elements.politics.value;
    const religious = event.target.elements.religious.value;
    const userPreffrance = {height, bodytype, kids, smoking, hangout, education, job, relationship, politics, religious}
  
    if(!userPreffrance)throw new Error("cant find user prefferance")

    fetch("/api/prefferanceUser/prefferance", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPreffrance),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        renderUserPage()
      })
    

  } catch (error) {
    
  }



}