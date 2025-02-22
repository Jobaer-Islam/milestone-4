// Given a product price as a string (e.g., "249"), extract the numeric digits and calculate their sum.

const productPrice = "249";
let sum = 0;
for(let i = 0; i < productPrice.length; i++) {
     digit = parseInt(productPrice[i]);
     sum += digit;
}
console.log(sum);

