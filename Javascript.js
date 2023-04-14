// program to find the factorial of a number


const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}


// program to reverse a string

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);



///program to generate fibonacci series


const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


// program for the repeated characters
var charRepeats = function(str) {
    for(var i = 0; i <= str.length; i++) {
        for(var j = i+1; j <= str.length; j++) {
            if(str[j] == str[i]) {
                return false;
            }
        }
    }
    return true;
}


//find a number is integer or not
const number=promopt("enter a number");
if(number % 1==0){
    console.log("this is integer");
}
else{
    console.log("this is not integer")
}



//programm to call a function
var MyFunction=function(){
    console.log('hello world!');
};
MyFunction();




//Getter and Setter
const student = {
    firstName: 'Monica'
}
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});


Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); 
student.changeName = 'Sarah';
console.log(student.firstName); 