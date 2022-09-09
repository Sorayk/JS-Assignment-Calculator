const screen = document.querySelector('.inner-screen .main');
const screenLog = document.querySelector('.screenlog');
const clear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal');
const addOperator = document.querySelector('.plus');
const subtractOperator = document.querySelector('.subtract');
const multiplyOperator = document.querySelector('.multiply');
const divideOperator = document.querySelector('.divide');
const equalOperator = document.querySelector('.equal');
const buttons = document.querySelectorAll('.button');
let displayMemory = [];// When you click on a button the value will be added to a string and will be shown on the screen as sting of numbers
let numberString = "";  // turns the strings to a number that we can do math on them
let operatorStorage = ""; // we assign the operator to an empty string
let tempOperator = ""; // whenever we click a button a new number will be added to the old string
let screenStorage = "";// the result of the operation is going to be saved on screen 


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2) {
    if (num1 === 0) {
        alert("You can not divide a number by 0!");
        return
    } else {
        return num1 / num2;
    }
};

function operate(operator, num1, num2){
    switch (operator) {
        case "add":
            result = add(num1, num2);
            displayOutput(result);   // It shows the result of the operator in the function set above
            return result;
        case "subtract":
            result = subtract(num1, num2);
            displayOutput(result);
            return result;
        case "multiply":
            result = multiply(num1, num2);
            displayOutput(result);
            return result;            
        case "divide":
            result = divide(num1, num2);
            displayOutput(result);
            return result;
        default:
            return 0;
    }
}

function displayOutput(input){ // this function takes an input and update the calculators display
    screen.textContent = input; 
}

function displayStorage(input){
        numberString = numberString + input;
        displayOutput(numberString);
};

function operatorDisplayStorage(input){ //
    operatorStorage = input;
}

function displayTemp2Memory(){
    let temp = parseFloat(numberString);// convert the string into numbers
    displayMemory.push(temp); 
    screenStorage = screenStorage + numberString + " " + operatorStorage + " "; 
    screenLog.textContent = screenStorage; 
    numberString = ""; 
};

clear.addEventListener('click', function(){
    displayMemory = [];
    numberString = "";
    screen.textContent = 0;
    screenLog.textContent = "0";
    screenStorage = "";
});

deleteNum.addEventListener('click', function(){
    if(numberString.length === 1){
        // displayMemory = [];
        displayTemp = "";
        screen.textContent = 0;
    } else if (numberString.length > 1){
        numberString = numberString.slice(0, numberString.length-1);
        displayOutput(numberString);
    }
});

addOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {
        operatorDisplayStorage("+")
        displayTemp2Memory(); 

        if(displayMemory.length === 2) {
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = [];
            displayMemory[0] = multiResult;   
        }
            tempOperator = "add";
    };
});

subtractOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {    
        operatorDisplayStorage("-")
        displayTemp2Memory();
        if (displayMemory.length === 2){
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult;
        };     
        tempOperator = "subtract";
    };   
});

multiplyOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {
        operatorDisplayStorage("*")
        displayTemp2Memory();
        if (displayMemory.length === 2){
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult;
        };     
        tempOperator = "multiply";
    };   
});

divideOperator.addEventListener('click', function(){
    if(numberString == "") {
        console.log("empty numString");
    } else {
        operatorDisplayStorage("/")
        displayTemp2Memory();
        if(displayMemory.length === 2 && displayMemory[1] === 0){
            screen.textContent = 0;
            screenLog.textContent = "You cannot divide by 0. Press CLEAR.";
            screenStorage = "";
        } else if (displayMemory.length === 2){
            let multiResult = operate(tempOperator, displayMemory[0], displayMemory[1]);
            displayMemory = []; 
            displayMemory[0] = multiResult;
        };     
        tempOperator = "divide";
    };   
});

equalOperator.addEventListener('click', function(){    
            operatorDisplayStorage("=");    
            displayTemp2Memory();    
     let result = operate(tempOperator, displayMemory[0], displayMemory[1]);
        displayMemory = [];
        numberString = "";  
        operatorStorage = "";
        tempOperator = "";
        screenStorage = "";
                 
});

decimal.addEventListener('click', function(){
    if(!numberString.includes(".")) {
        displayStorage(".");
    };    
});

one.addEventListener('click', function(){
    displayStorage(1);
});

two.addEventListener('click', function(){
    displayStorage(2);
});

three.addEventListener('click', function(){
    displayStorage(3);
});

four.addEventListener('click', function(){
    displayStorage(4);
});

five.addEventListener('click', function(){
    displayStorage(5);
});

six.addEventListener('click', function(){
    displayStorage(6);
});

seven.addEventListener('click', function(){
    displayStorage(7);
});

eight.addEventListener('click', function(){
    displayStorage(8);
});

nine.addEventListener('click', function(){
    displayStorage(9);
});

zero.addEventListener('click', function(){
    displayStorage(0);
});






