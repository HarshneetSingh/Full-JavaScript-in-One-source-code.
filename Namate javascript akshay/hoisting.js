// if we run befor a function or a variable which is declared by var will be 
// resulting undefined 
// Hoisting as a core concept relies on the way how Execution Context is created. In the first phase i.e. the Memory Allocation Phase all the variables and functions are allocated memory, even before any code is executed. All the variables are assigned undefined at this point in time in the local memory. 

getName();
getname3();
console.log(getName);
console.log(x);

var x=8;

var getName=()=> {
    console.log("hello paaji");

}
// or 

var getname2=function(){
    // this will also behave like a variable.
}
function getname3() {
    // this is proper function and will work before the function is initialised
}

// above thing is known as hoisting

// getname3();
// console.log(getname3)
// console.log(x);
