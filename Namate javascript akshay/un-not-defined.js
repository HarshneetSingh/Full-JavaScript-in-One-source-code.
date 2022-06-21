// not defined means = that VARIABLE ,it is not placed in the memory ;
//  undefined = undefined is an placeholder which is kept in the variable and it states that that variable is not assigned with anything yet.
// it is the keyword placed in the memory for a time being until a variable is assigned with some other value untill that it will act as a placeholder  .


var a;
console.log(a);

console.log("before initialising a ");
if(a===undefined){
    console.log("a is undifined");
}else {
    console.log("a is not undifined");

}

a=10;
console.log("after  initialising a ");
if(a===undefined){
    console.log("a is  undifined");
}
else {
    console.log("a is not undifined");

}
console.log("JAVASCRIPT is an losely or flexible or weakly  typed LANGAUGE")
var b;
console.log(b);
b=10;
console.log(b);
b="hello";
console.log(b);

// bad practice stating var as undefined. it brings unconsistency in the program

a= undefined;
console.log(a);

// For revision
// Undefined: a variable is 'declared', it has its own placeholder but not having the value of itself 'defined' hence 'undefined' and until the variable has assigned a value, the 'undefined' fills that particular placeholder
// and 'undefined' is itself a datatype
// (really sorry for referencing with c++ concepts)

// Not Defined: This case comes in error where js engine neither find that particular variable nor its placeholder
//  and cannot find the variable in 1st phase of context (Memory allocation context)

// and yes "flexibly typed language" sound pretty good instead of "weakly typed language"