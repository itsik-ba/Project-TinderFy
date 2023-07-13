"use strict";
exports.__esModule = true;
function userProfileData() {
    try {
        var urlParams = new URLSearchParams(window.location.search);
        var email = urlParams.get('email');
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
        var html = "\n  <div class=\"mainNav\">\n    <nav class=\"navBar\">\n         <ul class=\"navBar__ul\">\n             <li class=\"navBar__ul__li\" id=\"info\">Info</li>\n             <li class=\"navBar__ul__li\" onclick=\"findMatch('" + data.email + "')\">Find Match</li>\n             <li class=\"navBar__ul__li\">Messages</li>\n             <li class=\"navBar__ul__li\">Subscribe</li>\n         </ul>\n       </nav>  \n\n  \n        <div class=\"mainNav__userCard\">\n         <img src=\"https://upload.wikimedia.org/wikipedia/commons/b/bd/JenniferAnistonFeb09.jpg\" alt=\"JenniferAniston pic\" class=\"mainNav__userCard__img\">\n            <h2 class=\"mainNav__userCard__h2\"  style=\"color: red;\" id=\"h2User\"></h2>\n                <div class=\"edit\" onclick=\"editUser()\"></div>\n                <div class=\"delete\" onclick=\"deleteUser()\"></div>\n                <div class=\"imageUpload\" onclick=\"imageUpload()\"></div>\n      </div>\n         <div class=\"userProfileContainer\">\n            <p>Name:" + data.name + "</p>\n            <p>Subscribed: " + data.subscribed + "</p>\n            <p>Age: " + data.age + "</p>\n            <p>Gender: " + data.gender + "</p>\n          </div>\n\n  </div>\n  \n  <div class=\"usersCard\">\n  </div>";
        var body = document.querySelector("body");
        body.innerHTML = html;
    }
}
function findMatch(userEmail) {
    try {
        getUsers(userEmail);
    }
    catch (error) {
        console.error(error);
    }
}
function getUsers(userEmail) {
    try {
        fetch("/api/users/getusers")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            try {
                if (!users)
                    throw new Error("didnt find users");
                renderUsers(users, userEmail);
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
function renderUsers(users, userEmail) {
    try {
        if (!users)
            throw new Error("No users");
        var usersCard_1 = document.querySelector(".usersCard");
        if (!usersCard_1)
            throw new Error("coundnt find users ecard on DOM");
        users.map(function (user) {
            if (user.email != userEmail)
                usersCard_1.innerHTML += getPrefferance(user, userEmail) + ("<div class=\"userCard\">\n                <h3>Name:" + user.name + "</h3>\n                <p>Height: " + user.height + "</p>\n                <p>Age: " + user.age + "</p>\n                <p>Location: " + user.location + "</p>\n                <p>Job: " + user.job + "</p>\n                <p>Smoking: " + user.smoking + "</p>\n                <p>Kids: " + user.kids + "</p>\n                <p>Education: " + user.education + "</p>\n                <p>Religious level: " + user.religious + "</p>\n                <p>More about me: " + user.info + "</p>\n                <br>\n              </div>");
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderUser(user, userEmail) {
    try {
        return "<div class=\"userCard\">\n                <h3>Name:" + user.name + "</h3>\n                <p>Height: " + user.height + "</p>\n                <p>Age: " + user.age + "</p>\n                <p>Location: " + user.location + "</p>\n                <p>Job: " + user.job + "</p>\n                <p>Smoking: " + user.smoking + "</p>\n                <p>Kids: " + user.kids + "</p>\n                <p>Education: " + user.education + "</p>\n                <p>Religious level: " + user.religious + "</p>\n                <p>More about me: " + user.info + "</p>\n                <br>\n              </div>";
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function getPrefferance(user, userEmail) {
    try {
        fetch("/api/prefferanceUser/get-user-prefferance", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userEmail: userEmail })
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (!data)
                throw new Error("coundnt find prefferance for this user");
            matchingPercent(data["userPrefferance"], user);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function matchingPercent(data, user) {
    try {
        var percentOfMatching = 10;
        var usersCard = document.querySelector(".usersCard");
        if (!usersCard)
            throw new Error("coundnt find users ecard on DOM");
        else {
            if (user.gender != data.gender) {
                percentOfMatching = 1;
                console.log(percentOfMatching);
                usersCard.innerHTML += " ";
            }
            else if (user.relationship != data.relationship) {
                percentOfMatching = 1;
                console.log(percentOfMatching);
                usersCard.innerHTML += " ";
            }
            else {
                if ((user.height >= data.minHeight) && (user.height <= data.maxHeight))
                    percentOfMatching += 10;
                if ((user.age >= data.minAge) && (user.age <= data.maxAge))
                    percentOfMatching = percentOfMatching + 10;
                if (user.kids == data.kids)
                    percentOfMatching = percentOfMatching + 10;
                if ((user.smoking == data.smoking) || (data.smoking == "sometime"))
                    percentOfMatching = percentOfMatching + 10;
                if (user.education == data.education)
                    percentOfMatching = percentOfMatching + 10;
                if (user.religious == data.religious)
                    percentOfMatching = percentOfMatching + 10;
                console.log(percentOfMatching);
                usersCard.innerHTML += "<h4> Is a match? match of " + percentOfMatching + " </h4>";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
