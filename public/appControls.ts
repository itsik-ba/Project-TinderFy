
// fetch all the info from the form 
function createMyCard(event: any){
    event.preventDefault()
    console.log(event)
try {
    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const gender = event.target.elements.gender.value;
    const live = event.target.elements.live.value;
    const height = event.target.elements.height.value;
    const weight = event.target.elements.weight.value;
    const kids = event.target.elements.kids.value;
    const intrested = event.target.elements.intrested.value;
    const info = event.target.elements.info.value;
    const userCard = {name, age, gender, live, height, weight, kids, intrested, info}
    if(!userCard)throw new Error("cant find userCard Value's")

    fetch("/api/users/add-user/newProfile", {
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
          
        })


} catch (error) {
  console.error(error)  
}


}