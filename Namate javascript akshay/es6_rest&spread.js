//                                                                   rest 

// *?The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.


//  **A function definition's last parameter can be prefixed with "..." (three U+002E FULL STOP characters), which will 
//  **cause all remaining (user supplied) parameters to be placed within a standard JavaScript array. Only the last parameter in a function definition can be a rest parameter.

//  **rest in array

// ** you can also get the length 
 /*
  console.log(theArgs.length)
 }

 fun1()         // 0
 fun1(5)        // 1
 fun1(5, 6, 7)  // 3
 */

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
  }
  
myFun("one", "two")


// **here output of manymoreargs will be =[]




function addnumber(a, b, c) {
    return a + b + c;
}
const num = addnumber(2, 3, 4)
console.log(num);

// now what if a person pass the extra numbers 

// **es6
function addnumber2(a, b, c, ...other) {
    // return other;
    // now array will be passed as by the other 
    console.log(other);
    return a + b + c;

}
const num2 = addnumber2(2, 3, 4, 5, 6, 7, 8)
console.log(num2);

// es5

// es6
function addnumber3(a, b, c) {
    // return other;
    // now an object will be thrown by argumetents with the key  as a index and value as a elements which are passed 
    console.log(arguments);
    return a + b + c;

}
const num3 = addnumber3(2, 3, 4, 5, 6, 7, 8)
console.log(num3);


// *? difference between rest parameters and arguments object is not 
/**
 * * rest params are real arrays  the arguments object is not 
 * *array methods can be used on rest parameters  ,but not on the arguments object 
   *      
   *     function sortRestArgs(...theArgs) {
   *      let sortedArgs = theArgs.sort()
   *      return sortedArgs
   *    }
   *    
   *    console.log(sortRestArgs(5, 3, 7, 1)) // 1, 3, 5, 7
   *    
   *    function sortArguments() {
   *      let sortedArgs = arguments.sort()
   *      return sortedArgs  // this will never happen
   *    }
   *    
   *    console.log(sortArguments(5, 3, 7, 1))
     throws a TypeError (arguments.sort is not a function)
 */


//    *?  To use Array methods on the arguments object, it must be converted to a real array first.


// spread in array
const arr = [1, 3, 2, 4, 5]
function AIE(num1, num2, num3, num4) {

    console.log(num1, num2, num3, num4);

}
AIE(...arr);

AIE(arr[0], arr[4], ...arr);
AIE(arr[0], arr[4], arr[1], arr[3]);
AIE(arr);


//** rest in objects

const obj = {
    name: "hello",
    age: 199,
    hobbies: ["cricket", "singign"]

}
const objAge = obj.age
console.log(objAge)

const { age, ...rest } = obj;
// **yaha pe jo age ke ilava cheeze hai voh ayengi rest mai and vohi hei print hogi
console.log(age, rest)


// spread 
// **this is how you can overwrightthe value of obj1 
const obj2 = {
    ...obj,
    age: 40,
    class: 9
}
console.log(obj2)
var sum = function (a) {
    console.log("Live Viewers" + a);
    var c = 4;
    return function (b) {
        return a + b + c;
    }
}
var store = sum(200);// calling
console.log(store(5))


// 



//** const datas = [
//     { name: "hey" },
//     { name: "hello" }

// ]
// function getDatas() {
//     setTimeout(() => {
//         let output="";
//         datas.forEach((data, index) => {
//             output += `<li>${data.name}</li>`;
//         })
   //    document.body.innerHTML = outpu
//         console.log(output)
//     }, 1000);
// }
// function createdata(newdata, callback) {
//     setTimeout(()=>{
//         datas.push(newdata);
//        callback();
//     }, 7000); 
    
// } 
// **createdata({ name: "Vivek", Profression: "Software Engineer" }, getDatas)

