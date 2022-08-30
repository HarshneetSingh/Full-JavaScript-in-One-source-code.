// ? a promise work as a wrapper to async operation 

// ICE CREAM ORDER LIST

// DOING THROUGH CALLBACK FUNCTIONS ONLY

const stock = {
    flavour: ["strawberry", "choclate", "vanilla", "mix"],
    toppings: ["choco chips", "fruits", "gems"],
    liquid: ["choclate syrup ", "strawberry syrup"],
    holder: ["cone", "cup", "stick"]

};
// function atDesk(flavour,holder,toppings,liquid) {

//      function order( production_call) {
//         setTimeout(() => {
//             console.log(`1st :${stock.flavour[flavour]} is selected `)
//             production_call()
//         }, 2000);
//     }

//     function production() {
//         setTimeout(() => {
//             console.log("2nd :production has started");

//             setTimeout(() => {
//                 console.log("3rd :machine has started");

//                 setTimeout(() => {
//                     console.log(`4th: the icecream has been placed on ${stock.holder[holder]} `)

//                     setTimeout(() => {
//                         console.log(`5th: ${stock.toppings[toppings]} was put on the icecream`)

//                         setTimeout(() => {
//                             console.log(`6th: ${stock.liquid[liquid]}was put on the icecream`)

//                             setTimeout(() => {
//                                 console.log(`7th: ice cream was served `)

//                             }, 2000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);


//             }, 2000);


//         }, 0);
//     }
//     return order(production)
// }

// atDesk(2,0,2,1)


//  using promises

let workStatus = true;

// function atDesk2(flavour, holder, toppings, liquid) {


//     function order(time, work) {
//         return new Promise((resolve, reject) => {


//             if (workStatus) {
//                 setTimeout(() => {
//                     resolve(work());
//                 }, time);

//             } else {
//                 reject(console.log("sorry shop is closed "))
//             }
//         })
//     }


//     order(2000, () => { console.log(`1st :${stock.flavour[flavour]} is selected `) })

//     .then(()=>
//         {return order(0, () => {  console.log("2nd :production has started")})})

//     .then(()=>
//         {return order(2000, () => {  console.log("3rd :machine has started")})})

//     .then(()=>
//         {return order(1000, () => {  console.log(`4th: the icecream has been placed on ${stock.holder[holder]} `)})})

//     .then(()=>
//         {return order(1000, () => {  console.log(`5th: ${stock.toppings[toppings]} was put on the icecream`)})})

//     .then(()=>
//         {return order(1000, () => {  console.log(`6th: ${stock.liquid[liquid]}was put on the icecream`)})})

//     .then(()=>
//         {return order(2000, () => {  console.log(`7th: ice cream was served `)})})

//     .catch(()=>{
//         console.log(";/") 
//           })

//     .finally(()=>{
//         console.log("thank you for coming")
//     })

// }


// atDesk2(2, 0, 2, 1)


// ?promise all()

// if all are resolve then only then() will work else catch() will work
// * If the iterable passed is empty, the promise returned will be forever fullfilled.

const p2 = () => {
    return Promise.reject("helloooo");
};
const p3 = Promise.resolve("je");
const p1 = Promise.resolve("hello");
// Promise.all([p1, p2(), p3]).then(function (strings) {
//     console.log('all ' + strings);

// }).catch((e) => console.log(e));

// ?Promise RACE

// * If the iterable passed is empty, the promise returned will be forever pending.
// const p = Promise.race([p3, p1])

// console.log(p)
// setTimeout(() => console.log('2 race' + p))


// //* If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race will settle to the first of these values found in the array:
// Promise.race([p2, "hello", p3])
//     .then((result) => console.log('3 race ' + result))


// ? ascyc of promise

// !let k= new Promise(function (resolve, reject) {
//         setTimeout(function (){
//             resolve("yo")
//         },0);
// })

// console.log(k);      //* this will return pending state as js will run consoling k will be registered as pending as sit time out is there

// !let k= new Promise(function (resolve, reject) {
//             resolve("yo")
// })

// console.log(k);      //* this will return value as js will run consoling k will be registered as reolve value 

// let k= new Promise(function (resolve, reject) {
//         setTimeout(function (){
//             resolve("yo")
//         },10);
// })
// k.then((val) => console.log(val))  // * this will return value



// !promises with async await

// async function checkResponse(){
//     let delay =  new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             reject("yo");
//         });
//     }).catch((err) => console.log(err))   // this block of code will return the error message as async await will wait for the promise to resolve 

//     console.log(delay);   // and if its reject you will be getting undefined while consoling k 

// }
// checkResponse();

//! promises with any 

// it is just like race but it is more forgiveble as its check for every element in the iterable argument 
// race checks for first ONLY but any checks for every


// Promise.any([p2(),p3, "hello" ])
//     .then((result) => console.log('3 any ' + result))

// ! async practice

async function imgLoader() {
    const img = await fetch('preloader.gif');
    const response = await img.blob();
    const imgload = document.createElement('img')
    document.body.appendChild(imgload);
    imgload.src = URL.createObjectURL(response)
}
imgLoader().then(console.log('yeyeye')).catch(console.error("ehhe"))



