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
        var userCard = {
            name: name,
            age: age,
            gender: gender,
            location: location,
            height: height,
            weight: weight,
            kids: kids,
            intrested: intrested,
            info: info
        };
        if (!userCard)
            throw new Error("cant find userCard Value's");
        fetch("/api/users/", {
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
function createMyPrefferance(ev) {
    try {
        ev.preventDefault();
        console.log("createMyPrefferance");
        var elms = ev.target.elements;
        console.log(elms);
        var height = elms.height.value;
        var bodytype = elms.bodytype.value;
        var kids = elms.kids.value;
        var smoking = elms.smoking.value;
        var hangout = elms.hangout.value;
        var education = elms.education.value;
        var job = elms.job.value;
        var relationship = elms.relationship.value;
        var politics = elms.politics.value;
        var religious = elms.religious.value;
        var userPreffrance = {
            height: height,
            bodytype: bodytype,
            kids: kids,
            smoking: smoking,
            hangout: hangout,
            education: education,
            job: job,
            relationship: relationship,
            politics: politics,
            religious: religious
        };
        console.log(userPreffrance);
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
            window.location.href = "./login.html";
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handlegetMyUser() {
    console.log("get user");
    try {
        fetch("/api/users/getusers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            console.log(users);
            // userRender(users)
        });
    }
    catch (error) {
        console.error(error);
    }
}
