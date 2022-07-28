
//? why sort is an higher order function becase in js a sort function not that smart it just sort numbers and strings . not the objects 
//? thatswhy it takes an call back function


// *The sort() method sorts an array alphabetically:

let hello =["harshi", "hi", "sorts", "hello"]

hello.sort();
console.log(hello)

// mixed alphabetically sorting with capitalization

hello = ["harshi", "Hi","12", "sorts", "hello","200","2"]

          //first priorities of sort() is number then capitalization alphabet then lowercase alphabet
hello.toString()
hello.forEach((item)=> {
    console.log(`${item } +" " +${item.charCodeAt(0)} `)})


hello.sort(); 
console.log(hello)
// using the sort() method with mixed properties   

const strin="hello worid hi world."
let arr=strin.split(/\W+/)

.filter((item)=>{
    return item.length; // if theres a length in the xthen itll return 
})
.sort((a,b)=>{
  return  a.length-b.length
})
console.log(arr)