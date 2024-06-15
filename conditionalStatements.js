//Exercise 1: Temperature check
//If Statement

//1
let temperature = 21;

    if(temperature <= 0){
        console.log(`It's freezing`);
    }
    else if(temperature > 0 && temperature <= 15){
        console.log(`It's cold`);
    }
    else if(temperature > 15 && temperature <= 25){
    console.log(`It's mild`);
    }
    else{
    console.log(`It's warm`);
    }
console.log();

//////////////////////////////////////////////////////
//Switch Statement

    //2
    switch(true){
        case temperature <= 0: console.log(`It's freezing`);
        break;
        case temperature > 0 && temperature <= 15: console.log(`It's cold`);
        break;
        case temperature > 15 && temperature <= 25: console.log(`It's mild`);
        break;
        default: console.log(`It's warm`);
        break;
    }
    console.log();

    //Exercise 2: Divisibility check
    //If Statement

    //1
    let num4 = 3;
    if(num4 % 2 == 0 && num4 % 3 == 0){
        console.log(`Divisible by both`);
    }
    else if(num4 % 2 == 0){
        console.log(`Divisible by 2`);
    }
    else if(num4 % 3 == 0){
        console.log(`Divisible by 3`);
    }
    else{
        console.log(`Not Divisible by 2 or 3`);
    }
    console.log();

    //////////////////////////////////////////////////////
    //Switch Statement

    //2
    switch(true){
        case num4 % 2 == 0 && num4 % 3 == 0: console.log(`Divisible by both`);
        break;
        case num4 % 2 == 0: console.log(`Divisible by 2`);
        break;
        case num4 % 3 == 0: console.log(`Divisible by 3`);
        break;
        default: console.log(`Not Divisible by 2 or 3`);
    }