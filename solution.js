// 1:
const parkWalkStr = "I can walk in the park all day!";
console.log("park");
console.log(parkWalkStr.substring(18, 22));
// 2:
const helloStr = "Hello World";
console.log(helloStr.toUpperCase());

// 3:
const earthlingStr = "Hello Earthling";
console.log(earthlingStr.toLowerCase());

// 4:
const jsStr = "JavaScript";
console.log(jsStr.slice(3, 6));
console.log(jsStr.substring(3, 6));
// 5:
const niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));
// 6:
let oldStr = "Behnam";
let newStr = oldStr.charAt(0) + oldStr + oldStr.charAt(0);
console.log(newStr);
// 7:
const scritcherStr = "Behnam";
const lastThreeChars =
  scritcherStr.slice(-3) + scritcherStr + scritcherStr.slice(-3);
console.log(lastThreeChars);
// 8:
const boogieNightsStr = "BoogieWoogie";
const firstLetter = boogieNightsStr.charAt(0);
const lastLetter = boogieNightsStr[boogieNightsStr.length - 1];
const middleLetters = boogieNightsStr.slice(1, -1);
console.log(`${lastLetter}${middleLetters}${firstLetter}`);

// 9:
const firstName = "Maria";
const city = "Berlin";

console.log(
  "My name is" +
    " " +
    firstName +
    "." +
    " " +
    "I am linving in" +
    " " +
    city +
    " " +
    "and I am a teacher"
);
// 10:

const foxStr = "the quick brown fox";
console.log(foxStr.charAt(0).toUpperCase() + foxStr.slice(1));
// pro
// const str = "flexiple";
// const str2 = str.charAt(0, 3);
// console.log(str2);

let text = "Hello world, welcome to the universe.";
console.log(text.indexOf("i"));

// shold solve later"
