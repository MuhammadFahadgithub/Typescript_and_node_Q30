//solution:Q30
var userName = ['admin', 'Daffy Duck', 'sylvester', 'Tweety'];
userName.forEach(function (userName) {
    if (userName === "admin") {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again."));
    }
});
