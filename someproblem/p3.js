// Given an array of products, each with a catergory, separate them into two arrays: one for electronics and one for clothing. Store the result in an object.

const products = [
    {name: "Laptop", category: "Electronics"},
    {name: "T-Shirt", category: "Clothing"},
    {name: "Headphones", category: "Electronics"},
    {name: "Jeans", category: "Clothing"}
];

let categorizedProducts = {
    electronics: [],
    clothing: []  // Corrected the key here
};

for (let i = 0; i < products.length; i++) {
    const singleProduct = products[i];
    if (singleProduct.category === "Electronics") {
        categorizedProducts.electronics.push(singleProduct.name);
    } else if (singleProduct.category === "Clothing") {
        categorizedProducts.clothing.push(singleProduct.name);  // Using the corrected key
    }
}
console.log(categorizedProducts);
 