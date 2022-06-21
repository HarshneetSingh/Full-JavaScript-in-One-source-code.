
// brief of scope 

/*1. The scope
When you define a variable, you want it to exist within some boundaries. E.g. a result variable makes sense to exist within a calculate() function, as an internal detail. Outside of the calculate(), the result variable is useless.
The accessibility of variables is managed by scope. You are free to access the variable defined within its scope. But outside of that scope, the variable is inaccessible.
In JavaScript, a scope is created by a function or a code block.
*/

/*
How does JavaScript understand that outerVar inside innerFunc() corresponds to the variable outerVar of outerFunc()?
JavaScript implements a scoping mechanism named lexical scoping (or static scoping). Lexical scoping means that the accessibility of variables is determined by the position of the variables inside the nested scopes.
Simpler, the lexical scoping means that inside the inner scope you can access variables of outer scopes.
*/
// Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned,
//  even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just 
//  that function alone it returns but the entire closure and that's where it becomes interesting

// case 1
function one() {
    var a = 10;
    console.log(a);
    function two() {
        var b = 20;
        console.log(a);
    }
    two();
}
one();




// case 2 
function init() {
    var name = 'hello world'; // parent scope
    function displayName() {
        console.log(name); // child scope
    }
    displayName();
}
init();// hello world






// case 3 


function makeFunc() {
    var name = 'Hello World';
    function displayName() {
        console.log(name);
    }
    var name = 'THIS MAKING CONFUSE';

    return displayName;
}

var myFunc = makeFunc();
console.log(myFunc);

myFunc();
// makefunc() ke execute hone ke baad jo bhi console aya voh myFunc ke andr aya abh my func jabh run hoga as myfunc() then .
// when callinf myfunc() that will be refrencing to displayname and its remember it lexical scope 
// a closure will return ,that closure enclosed with function and its lexical scope is returned 


// OR CASE 3

function makeFunc2() {
    var name = 'Hello World';
    return function displayName() {
        console.log(name);
    }

}

var myFunc = makeFunc2();
console.log(myFunc);
// function displayName(){console.log(name)};
myFunc(); // Hello World




// EXAMPLE 4
console.log("example 4");
function makeName() {
    var name = 'Hello ';

    return function name2() {
        var name2 = 'harshneet';

        function displayName() {

            console.log(name + name2);
        }
        displayName();
    }
    // name2();
}
// makeName();
var myName = makeName();
console.log(myName);

myName();





// example 5

function createCounter() {
    let counter = 0;
    const myfunction = function () {
        counter = counter + 1;
        return counter;
    }
    return myfunction;
}
const increment = createCounter()
//   const c1 = increment()
//   const c2 = increment()
increment();
const c3 = increment()
console.log('example increment', c3) // 1, 2, 

// same with diff syntax

var createCounter2 = (function () {
    var counter = 0
    var myFunction = function () {
        counter = counter + 1;
        return counter
    }
    return myFunction;
})();
createCounter2;
// ƒunction () { counter = counter + 1; return counter } 
createCounter2() //1
createCounter2() //2
createCounter2() //3


// main closure example 

function outerFunction(outerVariable) {



    return function innerFunction(innerVariable) {
        console.log('Outer Variable:' + outerVariable);
        console.log('Inner Variable:+' , innerVariable);

    }
}
const newFunction = outerFunction('outside');
newFunction('inner');

/*
*If you are confused about his code example, please see my  3 step explanation:*

1. The outerFunction('outside') is called immediately when it is assigned to the 
variable "newFunction". (That's how it works when a function is assigned to a variable 
with (), if you didn't know this part, you would very confused).


2. Upon being called, outerFunction returns the function 
"innerFunction(innerVariable") which re-reassigns our variable "newFunction" to be 
InnerFunction(innerVariable) instead of outerFunction(outerVariable).


3. Then by calling our variable as newFunction('inside') we are calling innerFunction('inside') 
which runs the console.log code. The closure is that innerFunction remembers and has access to the outerVariable 
parameter we originally set with outerFunction('outside'). Thus it is able to console.log both 'outside' and 
'inside' even though it was called with just 'inside'. 
 */