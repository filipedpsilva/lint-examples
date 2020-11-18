var awesomeVar = 1234;
/**
 * cool function
 */
function do_Stuff () {
  const optionA = '1990';
  let optionB = "1989";

  let stuff = optionA != optionB ? optionA : optionB;

  stuff.toString();

  return stuff;
}

do_Stuff();

const literalString = `${awesomeVar} is a number`;

console.log(literalString);

// cool comment

function noSpaceBetweenArgs(a,b,c) {
    console.log("Theres no space between args");
}

function tooManyArgs(a, b, c, d, e, f, g, h) {
  // This function also has too many lines
  var varOne = 1;
  var varTwo = 2;

  if(varOne != varTwo) {
    console.log(varOne);
    return varOne;
  } else {
    console.log(varTwo);
    return varTwo;
  }
}

function thisNameIsWayTooBigForEslintToLetItGo(thisArgumentIsAlsoTooBigToEslintLetItGo, thisArgumentIsNotMuchBetterIfWeArehonest) {
  // Comments aren't safe from ESlint scrutiny either, so it will check every line to see if there's way too many characters
}

noSpaceBetweenArgs();
tooManyArgs();
thisNameIsWayTooBigForEslintToLetItGo();
