// fetch all the info from the form 
function createMyCard(event) {
    event.preventDefault();
    try {
        var name = event.target.elements.name.value;
        var age = event.target.elements.age.value;
        var gender = event.target.elements.gender.value;
        var live = event.target.elements.live.value;
        var height = event.target.elements.height.value;
        var weight = event.target.elements.weight.value;
        var kids = event.target.elements.kids.value;
        var intrested = event.target.elements.intrested.value;
        var info = event.target.elements.info.value;
        var userCard = { name: name, age: age, gender: gender, live: live, height: height, weight: weight, kids: kids, intrested: intrested, info: info };
        if (!userCard)
            throw new Error("cant find userCard Value's");
        fetch("/api/users/newProfile", {
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
        });
    }
    catch (error) {
        console.error(error);
    }
}
