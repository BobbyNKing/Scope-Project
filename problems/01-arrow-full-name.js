/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name.

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:

***********************************************************************/

let arrowGetFullName = (person) => {
  let firstName = person.firstName;
  let lastName = person.lastName;

  return firstName + ' ' + lastName;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowGetFullName;
} catch (e) {
  module.exports = null;
}
