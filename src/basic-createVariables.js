/**
 * Type definition for syntax check
 * @typedef {Object} SyntaxCheck
 * @property {number} myNumber
 * @property {string} myString
 * @property {Array} myArray
 * @property {Object} myObject
 */

/**
 * Create some basic variables
 * @returns {SyntaxCheck}
 */

function createVariables() {
  // TODO: Create a variable named 'myNumber', initialize it with the 'const' keyword and assign a number to it

  //  TODO: Create 'myString' and assign a string to it

  //  TODO: Create 'myArray', put an Array into it and fill that with some data

  //  TODO: Create 'myObject' and assign some object literal to it
  // return { myNumber, myString, myArray, myObject };
  return 'NOT IMPLEMENTED';
}

export default createVariables;

//
///
//
const myNumber = 42.0000000000024;
const myString = 'cR3aTe s0Me v@r1aBl3s';
const myArray = [myString, myNumber, new Date()];
const myObject = { myArray };

export { myArray, myNumber, myObject, myString };
