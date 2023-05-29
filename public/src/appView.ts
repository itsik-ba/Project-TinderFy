function creatProfile() {
  try {
    
    const userProfile = document.querySelector(
      ".userProfile"
    ) as HTMLDivElement | null;
    const profileHtml = `
        <div class="main">
        <h2 class="main__h2">welcome <span class="main__h2__span"></span></h2>
        <h3 class="main__h3">lets create your profile</h3>
        <form class="profileForm" onsubmit="createMyCard(event)">

        
         <label class="label" for="age">what is your age:</label> 
         <br>
         <input class="input" type="number" name="age">  
         <br>

         <label class="label" for="gender">whats your gender:</label>
         <br>
         <input class="inputRadio" type="radio" name="gender" value="man">man
         <input class="inputRadio" type="radio" name="gender" value="women">women
         <input class="inputRadio" type="radio" name="gender" value="other">other
         <br>

           <label class="label" for="location">where do you live:</label>
           <br>
           <input class="input" type="text" name="location">
           <br>

            <label class="label" for="height">what is your height:</label>
            <br>
            <input class="input" type="number" name="height">
            <br>

            <label class="label" for="bodytype-list">what is your bodyType:</label>
            <br>
            <input list="bodytype-list" name="bodytype-list" class="input">
            <datalist id="bodytype-list">
                <option value="small">
                <option value="medium">
                <option value="large">
                <option value="x-large">
                <option value="all">
            </datalist>
            <br>

            <label for="kids">do you have kids:</label>
            <br>
            <input class="inputRadio" type="radio" name="kids" value="ido">I do
            <input class="inputRadio" type="radio" name="kids" value="no">no kids
            <br>

            <label for="smoking">are you smoking:</label>
            <br>
            <input class="inputRadio" type="radio" name="smoking" value="ido">I do
            <input class="inputRadio" type="radio" name="smoking" value="no">no 
            <br>

            <label for="education">Education:</label>
          <br>
          <input type="radio" name="education" value="high school">high school
          <input type="radio" name="education" value="University">University 
          <input type="radio" name="education" value="didnt study">didnt study
          <br>

          <label for="job"> Job:</label>
          <br>
          <input type="radio" name="job" value="yes">yes
          <input type="radio" name="job" value="no">No
          <input type="radio" name="job" value="between">Between Jobs
          <br>

          <label for="relationship">The type of relationship:</label>
          <br>
          <input type="radio" name="relationship" value="love">looking for love
          <input type="radio" name="relationship" value="affair">Looking for an affair
          <input type="radio" name="relationship" value="Friendship">Friendship
          <br>

            <label class="label" for="yourself">few words about yourself:</label>
              <br>
              <textarea name="info" id="" cols="30" rows="10"></textarea>
              <br>

              <label for="religious">Religious belief:</label>
              <br>
              <input type="radio" name="religious" value="religious">religious
              <input type="radio" name="religious" value="secular">secular
              <input type="radio" name="religious" value="traditional">traditional
              <br>

              <button id="btnCreatProfile" type="submit">creat-profile</button>
        </form>
        </div>
        `;
    if (userProfile) userProfile.innerHTML = profileHtml;
  } catch (error) {
    console.error(error);
  }
}

function myPreferences() {
  try {
    const userProfile = document.querySelector(
      ".userProfile"
    ) as HTMLDivElement | null;
    const myPreferences = `
        <div>
        <h2>Now we will ask you about your preferences</h2>
        <h3>Your preferences will affect the adjustments you receive</h3>
        <form onsubmit="createMyPrefferance(event)">
        
          <label for="height">prefferd height:</label>
          <br>
          <input type="radio" name="height" value="tall">very tall - 1.80+
          <input type="radio" name="height" value="avarage">average height - 1.70 / 1.79 
          <input type="radio" name="height" value="short"> - 1.55 / 1.69
          <br>

          <label for="bodytype">prefferd body:</label>
          <br>
          <input type="radio" name="bodytype" value="full">Full body structure
          <input type="radio" name="bodytype" value="average">Average body type
          <input type="radio" name="bodytype" value="lean">lean body structure
          <br>

          <label for="kids">intrested in kids:</label>
          <br>
          <input type="radio" name="kids" vlaue="yes">yes
          <input type="radio" name="kids" vlaue="not now">not now
          <input type="radio" name="kids" vlaue="never">never
          <br>

          <label for="smoking">Smoking:</label>
          <br>
          <input type="radio" name="smoking" value="no">No
          <input type="radio" name="smoking" value="yes">Yes
          <input type="radio" name="smoking" value="sometimes">Sometime
          <br>

          <label for="hangout">likes to hang out:</label>
          <br>
          <input type="radio" name="hangout" value="home">Home
          <input type="radio" name="hangout" value="outside">Outside
          <input type="radio" name="hangout" value="both">Both
          <br>

          <label for="education">Education:</label>
          <br>
          <input type="radio" name="education" value="high school">high school
          <input type="radio" name="education" value="University">University 
          <input type="radio" name="education" value="didnt study">didnt study
          <br>

          <label for="job"> Job:</label>
          <br>
          <input type="radio" name="job" value="yes">yes
          <input type="radio" name="job" value="no">No
          <input type="radio" name="job" value="between">Between Jobs
          <br>

          <label for="relationship">The type of relationship:</label>
          <br>
          <input type="radio" name="relationship" value="love">looking for love
          <input type="radio" name="relationship" value="affair">Looking for an affair
          <input type="radio" name="relationship" value="Friendship">Friendship
          <br>

          <label for="religious">Religious belief:</label>
          <br>
          <input type="radio" name="religious" value="religious">religious
          <input type="radio" name="religious" value="secular">secular
          <input type="radio" name="religious" value="traditional">traditional
          <br>
          <button type="submit">creat</button>
        </form>
    </div>
    `;
    if (userProfile) userProfile.innerHTML = myPreferences;
  } catch (error) {
    console.error(error);
  }
}
