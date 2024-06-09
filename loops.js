// //Exercise 3: For Loops

//1
for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log();

//2
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log();

//3
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);
console.log();

//4
const numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
console.log();

//5
const nums = [3, 7, 2, 5, 10, 6];
let largestValue = nums[0]
for(let i = 0; i < nums.length; i++){
    if(largestValue < nums[i]){
        largestValue = nums[i]
    }
}
console.log(largestValue);

// Exercise 4: While loops

//1
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
console.log();

//2
let j = 1;
while(j <= 20){
    console.log(j);
    j++;
}
console.log();

//3
let k = 1
let sumOf = 0;
while(k <= 100){
    sumOf += k;
    k++
}
console.log(sumOf);
console.log();

//4
let index = 1;
while(index <= 50){
    if(index % 5 == 0){
        console.log(index);
    }
    index++;
}
console.log();

//Exercise 5: DO While loops

//1
let ii = 1;
do{
    console.log(ii);
    ii++;
}while(ii <= 10)
console.log();

//2
let jj = 1;
let sumOfDoWhile = 0;
do{
    sumOfDoWhile += jj;
    jj++;
}while(jj <= 100)
    console.log(sumOfDoWhile);
console.log();

//3
let greaterThan10;
let isGreaterThan10 = false;
do{
    greaterThan10 = prompt(`Enter a number greater than 10: `);
    if(greaterThan10 > 10){
        isGreaterThan10 = true;
    }
    else{
        alert(`Please enter a number greater than 10.`)
    }
}while(!isGreaterThan10)
    alert(`Number ${greaterThan10} is greater than 10, Thank You!`);
    console.log(`${greaterThan10} is greater than 10, Thank You!`);
console.log();

//4
let userGuess;
let randomNum = Math.floor(Math.random() * 10);
let isNumber = false;
do{
    userGuess = prompt(`guess the number between 1 and 10`)
    if(randomNum == userGuess){
        alert(`You rock !!! ${randomNum} was the correct guess!!`);
        console.log(`You rock !!! ${randomNum} was the correct guess!!`);
        isNumber = true;
    }
    else{
        alert(`That is incorrect. Try again`);
    }
}while(!isNumber)


