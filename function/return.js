function tenTimes(number){
    const result = number * 10;
    return result;
}

function cutHalf(number){
    const half = number / 2;
    return half;
}

tenTimes(5);

const output = tenTimes(10);
console.log('output: ', output);

const halfValue = cutHalf(10);
console.log('output' , halfValue);