/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds.

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:



funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


***********************************************************************/

function partyFunc () {
  console.log("Party time!")
}

let funcTimer = (time, func) => {
  setTimeout(func, time);
}

funcTimer(5000, partyFunc);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = funcTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
