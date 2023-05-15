// fetch all the info from the form 
function createMyCard(event) {
    event.preventDefault();
    try {
        var name = event.target.elements.name.value;
        var age = event.target.elements.age.value;
        var gender = event.target.elements.gender.value;
        var location = event.target.elements.location.value;
        var height = event.target.elements.height.value;
        var weight = event.target.elements.weight.value;
        var kids = event.target.elements.kids.value;
        var intrested = event.target.elements.intrested.value;
        var info = event.target.elements.info.value;
        var userCard = { name: name, age: age, gender: gender, location: location, height: height, weight: weight, kids: kids, intrested: intrested, info: info };
        if (!userCard)
            throw new Error("cant find userCard Value's");
        fetch("/api/profileUser/newProfile", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCard)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            myPreferences();
        });
    }
    catch (error) {
        console.error(error);
    }
}
function createMyPrefferance(event) {
    event.preventDefault();
    try {
        console.log("dfsdfsdfsdf");
        var height = event.target.elements.height.value;
        var bodytype = event.target.elements.bodytype.value;
        var kids = event.target.elements.kids.value;
        var smoking = event.target.elements.smoking.value;
        var hangout = event.target.elements.hangout.value;
        var education = event.target.elements.education.value;
        var job = event.target.elements.job.value;
        var relationship = event.target.elements.relationship.value;
        var politics = event.target.elements.politics.value;
        var religious = event.target.elements.religious.value;
        var userPreffrance = { height: height, bodytype: bodytype, kids: kids, smoking: smoking, hangout: hangout, education: education, job: job, relationship: relationship, politics: politics, religious: religious };
        if (!userPreffrance)
            throw new Error("cant find user prefferance");
        fetch("/api/prefferanceUser/prefferance", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userPreffrance)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            console.log("signin lets go");
            handleSignIn();
        });
    }
    catch (error) {
    }
}
