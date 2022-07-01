let arr =["harshi","singh"];
let myObject={
    name:"harshi",
    surName:"singh",
    getIntro: (function() {
        console.log(this.name +"and"+this.surName)
    })
}


// function FUN() {
//     // 
// }

//whenever you create any object js engine puts this hidden property into in object and attaches to your object .
// in other words js ingine attaches  its own presaved object into your object 
// not only with OBJECT IT ALSO WORK WITH ARRAYS AND FUNCTION 

// in case of array

// arr.__proto__ = object =Array.prototype = object// check result in browser console 
// arr._proto__.__proto__ = object.__proto__
// arr._proto__.__proto__.__proto__ = object.__proto__.__proto__= NULL

// its the prototype chain

// in case of OBJECT

// myObject.__proto__ =Object.prototype// check result in browser console 
// myObject._proto__.__proto__ = NULL


// in case of FUNCTION
// FUN.__proto__= function.prototype =function 
// FUN.__proto__.__proto__=object.prototype


// PROTOTYPE INHERITNCE 


let myObject2={
    name:"aditya"
}
myObject2.__proto__=myObject;
console.log(myObject2)
console.log(myObject2.name)// it will log aditya
console.log(myObject2.surName)// it will log singh
Function.prototype.mybind=function(){
    console.log('hello')
}

function func(){

}


function func2(){

}
func.mybind()
func2.mybind()
// THIS FUNC.MYBIND()  WILL GET THE ACCESS OF MY BIND()