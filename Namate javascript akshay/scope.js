// "lexical memory is created along with  execution context is created"

// here global level its leical refers to none bcz GEC has no parent so null

// "lexical memory is the local memory along with the lexical memoryof its parent"

/*
    A lexical scope in JavaScript means that a variable defined outside a function can 
    be accessible inside another function defined after the variable declaration. But the opposite 
    is not true; the variables defined inside a function will not be accessible outside that function.

    Scope in JavaScript refers to the current context of code, which determines the accessibility of 
    variables to JavaScript. The two types of scope are local and global: Global variables are those 
    declared outside of a block. Local variables are those declared inside of a block.
*/

// here a() is lexically inside in a global scope
function a() {

    var x = 10;
    c();


    //  here c() is lexically sitting inside a() or c() is physically present in a 
    //  here lexical enviroment parent is a() of c()
    function c() {
        console.log(x)
    }
}
a();
console.log(x)

// Every execution context has a reference to its outer environment, and that outer 
// environment is called Lexical Environment. check out below ex 
function one() {
    var a = 2;
    console.log(a);
    two();
}
function two() {

    console.log(a);
}
// var a is not defined in function two so it searched in its lexical environment i.e. 
// global execution context.

var a = 3;
console.log(a);
one();
