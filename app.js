//Emmett Kjolseth
//04/10/2024
//ES5 Map Calllback

//Original
// function double(arr) {
//   return arr.map(function (val) {
//     return val * 2;
//   });
// }

//Arrow Function
const double = (arr) => arr.map((val) => val * 2);

//Original
// function squareAndFindEvens(numbers) {
//   var squares = numbers.map(function (num) {
//     return num ** 2;
//   });
//   var evens = squares.filter(function (square) {
//     return square % 2 === 0;
//   });
//   return evens;
// }

//Arrow Function
const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
