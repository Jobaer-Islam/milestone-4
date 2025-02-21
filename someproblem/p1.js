// Given an array of products(string) names, remove duplicates while presenting the original order. Use a loop to achieve this without defining a fucction. 

let products = ["laptop", "phone", "laptop", "tablet", "phone"];

let uniqueProducts = [];

for (let i = 0; i < products.length; i++){
   const element = products[i];
   if(!uniqueProducts.includes(element)){
    uniqueProducts.push(element);
   }
}

console.log(uniqueProducts);
