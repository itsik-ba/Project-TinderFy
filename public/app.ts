function creatProfile(){
    try {
        const userProfile = document.querySelector(".userProfile")as HTMLDivElement|null
        const profileHtml = `
        <div class="main">
        <h2 class="main__h2">welcome <span class="main__h2__span"></span></h2>
        <h3 class="main__h3">lets create your profile</h3>
        <form class="profileForm">
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
              <button id="btnCreatProfile">creat-profile</button>
        </form>
        </div>
        `
        
        if(userProfile)
        userProfile.innerHTML = profileHtml




    } catch (error) {
        console.error(error)
    }


}