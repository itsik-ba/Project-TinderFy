function userProfileData() {
    var html = "\n    <div class=\"mainNav\">\n    <nav class=\"navBar\">\n         <ul class=\"navBar__ul\">\n             <li class=\"navBar__ul__li\">Info</li>\n             <li class=\"navBar__ul__li\">Finde Match</li>\n             <li class=\"navBar__ul__li\">Messages</li>\n             <li class=\"navBar__ul__li\">Subscribe</li>\n         </ul>\n       </nav>  \n\n  \n        <div class=\"mainNav__userCard\">\n         <img src=\"https://upload.wikimedia.org/wikipedia/commons/b/bd/JenniferAnistonFeb09.jpg\" alt=\"JenniferAniston pic\" class=\"mainNav__userCard__img\">\n            <h2 class=\"mainNav__userCard__h2\"  style=\"color: red;\" id=\"h2User\"></h2>\n                <div class=\"edit\" onclick=\"editUser()\"></div>\n                <div class=\"delete\" onclick=\"deleteUser()\"></div>\n                <div class=\"imageUpload\" onclick=\"imageUpload()\"></div>\n\n         <div class=\"userProfileContainer\">\n            <p>Name: DATABASE</p>\n            <p>Last Name: DATABASE</p>\n            <p>Age: DATABASE</p>\n            <p>Gender: DATABASE</p>\n            \n\n  </div>\n\n      ";
    var body = document.querySelector("body");
    body.innerHTML = html;
}