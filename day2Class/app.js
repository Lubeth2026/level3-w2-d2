"use strict";

//This is just to simply show State//
//No actual use for this app.js file//

let score = 0;
function increasePoints() {
  score++;
  //score = score + 1//
  console.log(score);
  return "Score Increased";
}
increasePoints();
increasePoints();

//State Variable names that can be used//
let isLoggedIn = true

let isAdmin = false

let darkmode = true