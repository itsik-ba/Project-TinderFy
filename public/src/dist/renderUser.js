function renderUserPage() {
    var h2User = document.querySelector("h2User");
    try {
        fetch("/newProfile", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
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
