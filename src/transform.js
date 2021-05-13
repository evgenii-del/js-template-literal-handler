// assign 80 once you accept a challenge to implement Level 80 requirements
export const level = 1;

/*
  Add parameters as appropriate.
  Should allow arbitrary number of expressions.
  Should work with arbitrary function expressions passed.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
*/
function formatArgs(param) {
  let newParam;

  if (typeof param === 'number') {
    newParam = param * 2 + 3;
  } else if (typeof param === 'string') {
    newParam = param.toLowerCase();
  } else if (typeof param === 'function') {
    newParam = param.name.toUpperCase();
  } else if (typeof param === 'object') {
    newParam = JSON.stringify(param);
  }

  return newParam;
}

function transform(strings, ...args) {
  let result = [];

  for (let i = 0; i <= strings.length; i++) {
    if (strings[i]) {
      result.push(strings[i]);
    }
    if (args[i]) {
      result.push(formatArgs(args[i]));
    }
  }

  return result.join('');
}

/*
  Level 1: expects no parameters. Returns its own name capitalized.
    Usage example:
      testFunction() should return 'TESTFUNCTION'
  Level 80: expects 2 parameters. Returns its own name capitalized and both parameters' values appended to it.
    Whitespaces should be trimmed from the first parameter.
    Parameters values are glued with '=' and parenthesized.
    Usage example:
      testFunction("some Text", 125) should return 'TESTFUNCTION(someText=125)'
 */
export function testFunction() {}
