a();

// function statement aka function decleration

// normal function decleartion is known as function statement 
function a() {
    console.log("a called");
}

//function expresssion 

// function declerad  with var  
var b = function () {
    console.log("a called")
}
b();
// main diff between function statement and function expression is hoisting 
// you can host function statement here as functions can be hoisted but you 
// you cant hoist function decleard with var it will be undefined 

// anonymous function

//          function (){
//                  func gpt no name 
//          }



// anonymous function are those function which has no name And can only be
//  accessed by a variable it is stored in as a function as a value
// or there only used when they are used as values 

// in above code it will throw sntax error as function statement requirs a name .


// named function expression 

//  a function which as declerad with da name as well as a value of an variable

var q = function xyz() {
    console.log(xyz);
};

q();

// xyz()

// here you will get an error will invoking xyz function bcz xyz function is not in the global space 
// you can access it in his local scope .

// first class function - a ability to used like a value

// proper defination 
/*
First-Class Function: A programming language is said to have First-class functions if functions in that language
are treated like other variables. So the functions can be assigned to any other variable or passed as an argument 
or can be returned by another function. JavaScript treat function as a first-class-citizens. This means that functions 
are simply a value and are just another type of object.

*/

// 1st assigning function as a variable

let r = function () {

}
r();

// 2nd returning function by another function 
function makeFunc() {

    return function displayName() {

    }
}

var myFunc = makeFunc();
console.log(myFunc);

//  its an beautiful art of an function  , the ability to pass an function as an argument in another function


function one(func) {
    func()
   
    console.log(func);
   
}

function numFunc() {
    console.log(1);
}

one(numFunc);