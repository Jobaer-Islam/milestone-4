const number = [1,2,3,4,5,6,7,8,9,10];

// console.log(number);

// number.reverse();

// console.log(number);

const rev_number = [];
for(const num of number){
    // console.log(num);
    rev_number.unshift(num)
    
}
// console.log(rev_number);


// reverse by for loop
const reversed_number = [];
for(let i = 0; i < rev_number.length; i++){
    const num = number[i];
    reversed_number.unshift(num);
}

// loop through reverse side

const rev_rev_num = [];
for(let i = number.length -1; i >= 0; i--){
    const num = number[i];
    console.log(num);
    rev_rev_num.push(num);
    
}
console.log(rev_rev_num);
