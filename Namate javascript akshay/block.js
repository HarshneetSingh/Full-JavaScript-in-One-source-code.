// The block statement is often called compound statement in other languages. 
// It allows you to use multiple statements where JavaScript expects only one 
// statement. Combining statements into blocks is a common practice in JavaScript.

// block is formed by using curly brackets

if (true) console.log("you can use if without using block for an single statement");

if (true) {
    // a compound statement
    var a = 10;
    console.log(a);
}
// a block scope is created along 
//Block Level Scope: This scope restricts the variable that is declared inside a specific block, from access by the outside of the block
// a Block is a compound statement that is defined by curly braces {} and used to combine multiple statements into one statement where 
// JavaScript expects only one statement. And all the variables and functions that can be accessed inside a block are said to be inside that block scope
{
    var b = 10;
    let c = 12;
    const d = 11;
    console.log(b);
    console.log(c);
    console.log(d);
}
// you cant access block elements out side the block except var variable 
// var
console.log(b);
// let
// console.log(c);
// const
// console.log(d);


// "what is shadowing in javascript"?
/*
Shadowing: Now, when a variable is declared in a certain scope having the
 same name defined on its outer scope and when we call the variable from the
  inner scope, the value assigned to the variable in the inner scope is the value 
  that will be stored in the variable in the memory space.
*/

console.log("what is shadowing in javascript")
console.log("incase of var ");

var x = 10;
console.log(x);

function hello1() {
    var x = 20
    console.log(x);
}
hello1();
console.log(x);
{
    var x = 30;
    console.log(x);
}
console.log(x);

console.log("incase of let and const ");

let e = 10;
console.log(e);

function hello() {
    let e = 20
    console.log(e);
}
hello();
console.log(e);
{
    let e = 30;
    console.log(e);
}
console.log(e);

// illegal shadowing

function func() {
    var p = 'Geeks';
    let y = 'Geeks';
      
    if (true) {
        // you can shadow var a as let p bcs let p will creat block scope both will be in seperate scope
        let p = 'GeeksforGeeks'; // Legal Shadowing

        // var y = 'Geeks'; // Illegal Shadowing
        // if we try to shadow let variable by var variable, 
        // it is known as Illegal Shadowing and it will give the error as “variable is already defined.” 

        console.log(a); // It will print 'GeeksforGeeks'
        console.log(y); // It will print error
    }
}
func();

// block work as a lexical sope chain

const q = 10;
{
    const q = 100;
    {
        const q = 200;
        console.log(q);

    }
    console.log(q);

}
console.log(q);