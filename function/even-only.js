function evenNumberOnly(numbers){
    const evens = [];
    for(const numb of numbers){
        if(numb % 2 == 0){
            console.log(numb);
            
            evens.push(numb);
        }
    }
    return evens;
}
const numbers = [5, 8, 13, 91, 24, 6];
const evens = evenNumberOnly(numbers);
console.log('even numbers are:', evens);