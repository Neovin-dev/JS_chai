let myArr = [1, 4, 2, 3, 5, 6];
let arraysalla = [];


function sumFactory(numbers){
    let sum = 0; 
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];

    }
    return sum;
}

let result = sumFactory(myArr);
console.log(result);

let anotherResult = sumFactory([3, 3, 2, 6, 4]);
console.log(`This is the answer of rawdoging the array as input ${anotherResult}`);
