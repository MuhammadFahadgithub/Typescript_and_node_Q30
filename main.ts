//solution:Q30
const userName:string[]=['admin', 'Daffy Duck', 'sylvester', 'Tweety'];
userName.forEach(userName=> {
    if (userName === `admin`)
    {
        console.log('Hello admin, would you like to see a status report?');   
    }
else{
    console.log(`Hello ${userName}, thank you for logging in again.`);})