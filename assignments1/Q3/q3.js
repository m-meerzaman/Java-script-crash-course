let num1 = +prompt("Enter first number.");
let num2 = +prompt("Enter second number.");
let num3 = +prompt("Enter third number.");
let num4 = +prompt("Enter fourth number.");
let num5 = +prompt("Enter fifth number.");

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
  console.log(num1 + " is a greater number.");
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
  console.log(num2 + " is a greater number.");
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
  console.log(num3 + " is a greater number.");
} else if (num4 > num1 && num4 > num3 && num4 > num2 && num4 > num5) {
  console.log(num4 + " is a greater number.");
} else {
  console.log(num5 + " is a greater number.");
}
