//Ateeb Ahmed Assignment: Even vs Odd 
function isEven(n) {
    return n % 2 === 0;
}
var n1 = 21;
var en = isEven(n1);
if (en) {
    console.log("".concat(n1, " is even"));
}
else {
    console.log("".concat(n1, " is odd"));
}
