// Array like object

function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
}
add(12,34,56,45,78);

// const products = [15, 56, 87]
const products = {
    '0' : 15,
    '1' : 56,
    '2' : 87
}