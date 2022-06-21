let a = 3;
function outest(str1) {
    function outer(str) {


        function inner() {

            console.log(a, str, str1);

        }
        let a = 2;
        return inner;

    }
    return outer;
}

var ttl = (outest("harshu"))("hello");
ttl();

// function constructor in js 
function Counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);

    }
    this.decrementCounter = function () {
        count--;
        console.log(count);

    }

}
// or 
// class Counter {
//     constructor() {
//         var count = 0;
//         this.incrementCounter = function () {
//             count++;
//             console.log(count);

//         };
//         this.decrementCounter = function () {
//             count--;
//             console.log(count);

//         };

//     }
// }

var Counter1 = new Counter();

Counter1.incrementCounter();
Counter1.incrementCounter();
Counter1.decrementCounter();



// example of smart garbage collecter 

function outer0() {

    let a = 2; let b = 2;
    console.log(a);
    return function inner0() {

        console.log(a);

    }



}
const ex=outer0();
ex();