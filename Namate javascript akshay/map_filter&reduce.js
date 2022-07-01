// map

let arr = [1, 2, 3, 4]
// case 1
function output(num) {
    const doubleNum = [];
    for (let index = 0; index < num.length; index++) {
        doubleNum.push(num[index] * 2);
    }
    return doubleNum;
}
console.log(output(arr));

// case 2
function double(num) {
    return num * 2;
}
function outPut(num) {
    const doubleNum = [];
    for (let index = 0; index < num.length; index++) {
        doubleNum.push(double(num[index]));
    }
    return doubleNum;
}
console.log(output(arr));

// case 3 
function double(num) {
    return num * 2;
}
function tripple(num) {
    return num * 3;
}
function binary(num) {
    return num.toString(2);
}
const mapOutput = arr.map(binary);
// WE CAN ALSO PASS IT AS A ANONYMOUS FUNC


// const mapOutput=arr.map((num) =>{
//     return num.toString(2);
// });

// IT IS LIKE MAPPING EACH AND EVERY VALUE ( TAKEN FROM AN ARR  )TO ANOTHER VALUE AND CREATING A ARRAY
// AND RETURNING IN A OUTPUT

console.log(mapOutput)
// num.map(output(num));








// FILTER

let x = [1, 23, 4, 5, 6];
// function odd(x) {
//     return x%2;
// }
// this will also return odd number 

function odd(x) {
    return x % 2 !== 0;
}
function even(x) {
    return x % 2 === 0;
}
function greaterThan4(x) {
    return x >= 4;

}
const evenn = x.filter(even);
console.log(evenn);


const oddd = x.filter(odd);
console.log(oddd);
const greater4 = x.filter((x) => {
    return x >= 4;

});
console.log(greater4);





// REDUCE()

// FIND SUM 

const arrr = [1, 2, 3, 4]
function sum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {

        sum += arr[index];
    }
    return sum;
}

console.log(sum(arrr));

// now doing it by reduce 

const reduceSum = arrr.reduce((acc, curr) => {

    acc = acc + curr;
    return acc
}, 0);
// here this callback func is run  for each of the value of arrr AND BASICALLY accumulater appeniding the sum of the current value to itself...
// and 2nd argument is passed 0 . as it means the initialisation of the acc .
console.log(reduceSum);



// find Max

function Max(arr) {
    let Max = 0;
    for (let index = 0; index < arr.length; index++) {


        if (arr[index] > Max) {
            // if our current value is greater than max value 
            // then we will override the max value
            Max = arr[index];

        }
        else {
            Max;
        }

    }
    return Max;
}

console.log(Max(arrr));

// by reduce 

const MaxNo = arrr.reduce(function (max, curr) {
    // here acc is just acting like max =0
    if (curr > max) {
        max = curr
    }
    return max
}, 0)

console.log(MaxNo)




// more problems 

const users = [
    { fN: "harshneet", lN: "singh", age: 19 },
    { fN: "Web", lN: "singh", age: 35 },
    { fN: "Xenon", lN: "singh", age: 19 }
]
// list of full names 
// ["harshneet singh" ,"websingh"];

function list(forum) {
    // let firstName = "";
    // let lastName = "";
    for (let index = 0; index < forum.length; index++) {
        //  firstName =forum[index].fN;
        // lastName =  forum[index].lN;
        console.log(forum[index].fN + " " + forum[index].lN);
    }
};

list(users);
// using by map
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
const listByfilter = users.map(function (x) {
    console.log(x.fN + " " + x.lN);

})

// it is also working with filter


// 2nd question
// checking the same age 

function age(forum) {
    let age = [];
    for (let index = 0; index < forum.length; index++) {

        age.push(forum[index].age);

    }
    // if(age)
    return age;
}


// age with similiar

const samAge=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[age];
    }
    else{
        acc[curr.age]=1;
    }

},{})
console.log(samAge);
// const ageArr = age(users);
// console.log(ageArr)
// function countAge(arr) {
//     let count = 0;
//     for (let index = 0; index < arr.length; index++) {
//         for (let i = 0; i < arr.length; i++) {





//         }
//     }
// }

// countAge(ageArr)


// 3RD QUESTION


const filterAge = users.filter(function (x) {

    return x.age < 30
}).map(x => {
    return x.fN;
});
console.log(filterAge);

// by reduce 

const fiterByReduce= users.reduce((acc,curr)=>{
    if(curr.age<30){
        acc.push(curr.fN);

    }
    return acc;
},[]);

console.log(fiterByReduce)


// 4th question 

const avg = arrr.reduce((acc, curr,index,array) => {

    let ttl =acc = acc + curr;

    if(index===array.length-1){
        return ttl/array.length;
    }
    return ttl;
}, 0);

console.log(avg);
