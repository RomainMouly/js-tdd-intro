
const assert = require('assert');



// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstletters transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
//Check plusieurs mots dans une phrase
assert.strictEqual(capitalizeFirstLetters('javaScript with react'), 'JavaScript With React');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');