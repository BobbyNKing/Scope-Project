/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle.

Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

let recVolume = (height) => {
  let triangle = [height];

  let func1 = (num) => {
    if (triangle.length < 3) {
      triangle.push(num);
    }

    if (triangle.length === 3) {
      return triangle.reduce((acc, area) => acc *= area, 1);
    }

    return func1;
  }

  return func1;
}

let triforce = recVolume(5);
console.log('first: ', triforce);

console.log('second: ', triforce(2));
console.log('third: ', triforce(2));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
