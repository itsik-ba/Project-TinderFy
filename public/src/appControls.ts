// fetch all the info from the form
function createMyCard(event: any) {
  event.preventDefault();

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
    const userCard = {
      name,
      age,
      gender,
      location,
      height,
      weight,
      kids,
      intrested,
      info,
    };
    if (!userCard) throw new Error("cant find userCard Value's");

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
        myPreferences();
      });
  } catch (error) {
    console.error(error);
  }
}

function createMyPrefferance(ev: any) {
  try {
    ev.preventDefault();
    console.log("createMyPrefferance");
    const elms = ev.target.elements;
    console.log(elms)
    const height = elms.height.value;
    const bodytype = elms.bodytype.value;
    const kids = elms.kids.value;
    const smoking = elms.smoking.value;
    const hangout = elms.hangout.value;
    const education = elms.education.value;
    const job = elms.job.value;
    const relationship = elms.relationship.value;
    const politics = elms.politics.value;
    const religious = elms.religious.value;
    const userPreffrance = {
      height,
      bodytype,
      kids,
      smoking,
      hangout,
      education,
      job,
      relationship,
      politics,
      religious,
    };

    console.log(userPreffrance);

    if (!userPreffrance) throw new Error("cant find user prefferance");

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
        console.log("signin lets go");
        window.location.href = "./index.html";
      });
  } catch (error) {
    console.error(error)
  }
}
