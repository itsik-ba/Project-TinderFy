function creatProfile(){
    try {
        const userProfile = document.querySelector(".userProfile")as HTMLDivElement|null
        const profileHtml = `
        <div class="main">
        <h2 class="main__h2">welcome <span class="main__h2__span"></span></h2>
        <h3 class="main__h3">lets create your profile</h3>
        <form class="profileForm" onsubmit="myPreferences()">
         <label for="fnam" class="label">full name:</label>
         <br>
         <input class="input" type="text" name="fname">
         <br>
         <label class="label" for="age">what is your age:</label> 
         <br>
         <input class="input" type="date" name="age">  
         <br>
         <label class="label" for="gender">whats your gender:</label>
         <br>
         <input class="inputRadio" type="radio" name="genderMan">man
         <input class="inputRadio" type="radio" name="genderWomen">women
         <input class="inputRadio" type="radio" name="genderOther">other
         <br>
           <label class="label" for="live">where do you live:</label>
           <br>
           <input class="input" type="text" name="live">
           <br>
            <label class="label" for="height">what is your height:</label>
            <br>
            <input class="input" type="number" name="height">
            <br>
            <label class="label" for="weight">what is your weight:</label>
            <br>
            <input class="input" type="number" name="weight">
            <br>
              <label class="label" for="yourself">tell us about yourself:</label>
              <br>
              <textarea name="yourself" id="" cols="30" rows="10"></textarea>
              <br>
              <label class="label" for="intrested">intrested in:</label>
              <br>
              <input class="inputRadio" type="radio" name="intrestedMan">man
              <input class="inputRadio" type="radio" name="intrestedWomen">women
              <input class="inputRadio" type="radio" name="intrestedBoth">both
              <br>
              <button id="btnCreatProfile" type="submit">creat-profile</button>
        </form>
        </div>
        `
        
        if(userProfile)
        userProfile.innerHTML = profileHtml

       } catch (error) {
        console.error(error)
    }
}


function myPreferences(){
    try {
        const userProfile = document.querySelector(".userProfile")as HTMLDivElement|null
        const myPreferences = `
        <div>
        <h2>Now we will ask you about your preferences</h2>
        <h3>Your preferences will affect the adjustments you receive</h3>
        <form>
          <label for="prefferdHeight">prefferd height:</label>
          <br>
          <input type="radio" name="prefferdHeightTall">very tall - 1.90+
          <input type="radio" name="prefferdHeightAverage">average height -  1.66 / 1.76 
          <input type="radio" name="prefferdHeightShort">Short - 1.50 / 1.65
          <br>
          <label for="prefferdBody">prefferd body:</label>
          <br>
          <input type="radio" name="prefferdBodyFull">Full body structure
          <input type="radio" name="prefferdBodyAverage">Average body type
          <input type="radio" name="prefferdBodyLean">lean body structure
          <br>
          <label for="prefferdHairColor">Favorite hair color:</label>
          <br>
          <input type="radio" name="prefferdHairColorBlond">Blond
          <input type="radio" name="prefferdHairColorBlack">Black
          <input type="radio" name="prefferdHairColorAny">Any
          <br>
          <label for="prefferdSmoking">Smoking:</label>
          <br>
          <input type="radio" name="prefferdSmokingNo">No
          <input type="radio" name="prefferdSmokingYes">Yes
          <input type="radio" name="prefferdSmokingSometime">Sometime
          <br>
          <label for="prefferdHangOut">likes to hang out:</label>
          <br>
          <input type="radio" name="prefferdHangOutHome">Home
          <input type="radio" name="prefferdHangOutOutside">Outside
          <input type="radio" name="prefferdHangOutBoth">Both
          <br>
          <label for="prefferdEducation">education:</label>
          <br>
          <input type="radio" name="prefferdEducationHighSchool">high school
          <input type="radio" name="prefferdEducationUniversityDegree">University degree
          <input type="radio" name="prefferdEducationIDidntStudy">I didnt study
          <br>
          <label for="prefferdEconomicSituation">Economic situation:</label>
          <br>
          <input type="radio" name="prefferdEconomicSituationAverage">average
          <input type="radio" name="prefferdEconomicSituationAboveAverage">Above average
          <input type="radio" name="prefferdEconomicSituationBelowAverage">Below average
          <br>
          <label for="prefferdRelationship">The type of relationship:</label>
          <br>
          <input type="radio" name="prefferdRelationshipLookingForLove">looking for love
          <input type="radio" name="prefferdRelationshipLookingForAnAffair">Looking for an affair
          <input type="radio" name="prefferdRelationshipFriendshipOrFinancialSupport">Friendship or financial support
          <br>
          <label for="prefferdPoliticalPerception">political perception:</label>
          <br>
          <input type="radio" name="prefferdPoliticalPerceptionRight">Right
          <input type="radio" name="prefferdPoliticalPerceptionLeft">Left
          <input type="radio" name="prefferdPoliticalPerceptionIDontCare">I Dont Care
          <br>
          <label for="prefferdReligiousBelief">Religious belief:</label>
          <br>
          <input type="radio" name="prefferdReligiousBeliefReligious">religious
          <input type="radio" name="prefferdReligiousBeliefSecular">secular
          <input type="radio" name="prefferdReligiousBeliefTraditional">traditional
          <br>
        </form>
    </div>
    `
         if(userProfile)
         userProfile.innerHTML = myPreferences;
    } catch (error) {
        console.error(error)
    }
   }