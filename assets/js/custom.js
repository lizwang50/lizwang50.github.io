var today = new Date();
var hourNow = today.getHours();
var greeting = document.getElementsByClassName('.greet');
  
if (hourNow >= 18) {
  greeting = 'こんばんは';
} else if (hourNow >= 12) {
  greeting = 'こんにちは';
} else if (hourNow >= 0){
  greeting = 'こんばんは';
} else{
  greeting = 'こんにちは';
}



// //time greetings
// var today = new Date();
// var hourNow = today.getHours();
// var greeting = document.getElementById('#greet');

// if (hourNow > 18) {
//   greeting = 'Good Evening!';
// } else if (hourNow >= 12) {
//   greeting = 'Good Afternoon!';
// } else if (hourNow >= 0) {
//   greeting = 'Good Morning';
// } else {
//   greeting = 'Welcome!';
// }