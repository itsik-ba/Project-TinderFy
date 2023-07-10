"use strict";
exports.__esModule = true;
function userProfileData() {
    try {
        var urlParams = new URLSearchParams(window.location.search);
        var email = urlParams.get("email");
        fetch("/api/users/main", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email })
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            renderProfile(data["userCard"][0]);
        });
        console.log();
    }
    catch (error) { }
    function renderProfile(data) {
        var html = "\n  <div class=\"mainNav\">\n    <nav class=\"navBar\">\n         <ul class=\"navBar__ul\">\n             <li class=\"navBar__ul__li\" id=\"info\">Info</li>\n             <li class=\"navBar__ul__li\" onclick=\"findMatch(" + data.id + ")\">Find Match</li>\n             <li class=\"navBar__ul__li\">Messages</li>\n             <li class=\"navBar__ul__li\">Subscribe</li>\n         </ul>\n       </nav>  \n\n  \n        <div class=\"mainNav__userCard\">\n         <img src=\"https://upload.wikimedia.org/wikipedia/commons/b/bd/JenniferAnistonFeb09.jpg\" alt=\"JenniferAniston pic\" class=\"mainNav__userCard__img\">\n            <h2 class=\"mainNav__userCard__h2\"  style=\"color: red;\" id=\"h2User\"></h2>\n                <div class=\"edit\" onclick=\"editUser()\"></div>\n                <div class=\"delete\" onclick=\"deleteUser()\"></div>\n                <div class=\"imageUpload\" onclick=\"imageUpload()\"></div>\n      </div>\n         <div class=\"userProfileContainer\">\n            <p>Name:" + data.name + "</p>\n            <p>Subscribed: " + data.subscribed + "</p>\n            <p>Age: " + data.age + "</p>\n            <p>Gender: " + data.gender + "</p>\n          </div>\n\n  </div>\n  \n  <div class=\"usersCard\"></div>";
        var body = document.querySelector("body");
        body.innerHTML = html;
    }
}
function findMatch(userId) {
    try {
        getUsers(userId);
    }
    catch (error) {
        console.error(error);
    }
}
function getUsers(userId) {
    try {
        fetch("/api/users/getusers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            try {
                if (!users)
                    throw new Error("didnt find users");
                console.log(users);
                renderUsers(users, userId);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderUsers(users, userId) {
    try {
        if (!users)
            throw new Error("No users");
        var html = users
            .map(function (user) {
            if (user.email != new URLSearchParams(window.location.search).get("email"))
                return renderUser(user, userId);
        })
            .join(" ");
        var usersCard = document.querySelector(".usersCard");
        if (!usersCard)
            throw new Error("coundnt find users ecard on DOM");
        usersCard.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderUser(user, userId) {
    try {
        var matchingPercentage = getPrefferance(user, userId);
        if (matchingPercentage != 0)
            return "<div class=\"userCard\">\n              <h3>Name:" + user.name + "</h3>\n              <h4>Is a match?:match of " + matchingPercentage + "%</h4>\n              <p>Height: " + user.height + "</p>\n              <p>Age: " + user.age + "</p>\n              <p>Location: " + user.location + "</p>\n              \n              <p>Job: " + user.job + "</p>\n              <p>Smoking: " + user.smoking + "</p>\n              <p>Kids: " + user.kids + "</p>\n              <p>Education: " + user.education + "</p>\n              <p>Religious level: " + user.religious + "</p>\n              <p>More about me: " + user.info + "</p>\n            </div>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
function getPrefferance(user, userId) {
    fetch("/api/prefferance/get-user-prefferance")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        return matchingPercent(data, user);
    });
}
function matchingPercent(data, user) {
    var percentOfMatching = 10;
    if (user.gender != data.gender)
        return 0;
    if (user.relationship != data.relationship)
        return 0;
    if (user.height >= data.minHeight && user.height <= data.maxHeight)
        percentOfMatching += 10;
    if (user.age >= data.minAge && user.age <= data.maxAge)
        percentOfMatching += 10;
    //if (user.bodyType == data.bodyType || data.bodyType=="all")
    // percentOfMatching+=10;
    if (user.kids == data.kids)
        percentOfMatching += 10;
    if (user.smoking == data.smoking || data.smoking == "sometime")
        percentOfMatching += 10;
    if (user.education == data.education)
        percentOfMatching += 10;
    if (user.religious == data.religious)
        percentOfMatching += 10;
    return percentOfMatching;
}
