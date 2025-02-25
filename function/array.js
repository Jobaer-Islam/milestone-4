function sumOfNumbers(numbers){
    let sum = 0;
    for(const num of numbers){
        console.log(num);
        sum += num;
    }
    return sum;
}

const nums = [1,2,3,4,5,6,7];

const sum = sumOfNumbers(nums);
console.log('sum of numbers is : ', sum);