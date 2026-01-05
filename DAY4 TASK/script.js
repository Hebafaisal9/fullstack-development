//1. A function that adds two numbers

function add(num1,num2) {
    const sum = num1 + num2;
    console.log(sum);
}

add(2,7);


//2. A function that checks if a number is even or odd

function evenodd(num){
    if(num%2 === 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

evenodd(7);
evenodd(10);

//3. A function that finds the largest of three numbers

function largestOfThree(num1,num2,num3){
    let largest;
    if (num1 >= num2 && num1 >= num3 ){
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3){
        largest = num2;
    } else {
        largest = num3;
    }

    console.log("Largest number : ", largest);
}

largestOfThree(10,5,2);
largestOfThree(15,20,18);
largestOfThree(20,18,25);

//4. A function that converts Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
        const Fahrenheit = (celsius * 9 / 5) + 32;
        console.log(celsius + "C =", Fahrenheit + "F");
}

celsiusToFahrenheit(40);