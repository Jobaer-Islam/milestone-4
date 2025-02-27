const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++){
//     const num = numbers[i];
//     console.log(num)
// }

// for of

// for(const num of numbers){
//     console.log(num);
// }

const products = [
    {id: 1, name: 'Xiami phone', price : 20000},
    {id: 2, name: 'iphone', price : 120000},
    {id: 3, name: 'mac book air', price : 200000},
    {id: 4, name:'lenovo', price : 120000}, 
    {id: 5, name: 'Dell inspiron laptops', price : 120000}
    ];

    // for(const product of products){
    //     console.log(product.name);
    // }

    function matchedProduct(products, search){
        const matched = [];
        for(const product of products){
            if(product.name.toLowerCase().includes(search.toLowerCase())){
                matched.push(product);
            }
        }
        return matched;
    }

    const result = matchedProduct(products,'PHONE');
    console.log(result);