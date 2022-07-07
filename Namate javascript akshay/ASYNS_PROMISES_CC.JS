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

function atDesk2(flavour, holder, toppings, liquid) {


    function order(time, work) {
        return new Promise((resolve, reject) => {


            if (workStatus) {
                setTimeout(() => {
                    resolve(work());
                }, time);

            } else {
                reject(console.log("sorry shop is closed "))
            }
        })
    }


    order(2000, () => { console.log(`1st :${stock.flavour[flavour]} is selected `) })

    .then(()=>
        {return order(0, () => {  console.log("2nd :production has started")})})

    .then(()=>
        {return order(2000, () => {  console.log("3rd :machine has started")})})

    .then(()=>
        {return order(1000, () => {  console.log(`4th: the icecream has been placed on ${stock.holder[holder]} `)})})

    .then(()=>
        {return order(1000, () => {  console.log(`5th: ${stock.toppings[toppings]} was put on the icecream`)})})

    .then(()=>
        {return order(1000, () => {  console.log(`6th: ${stock.liquid[liquid]}was put on the icecream`)})})

    .then(()=>
        {return order(2000, () => {  console.log(`7th: ice cream was served `)})})

    .catch(()=>{
        console.log(";/") 
          })

    .finally(()=>{
        console.log("thank you for coming")
    })

}


atDesk2(2, 0, 2, 1)


