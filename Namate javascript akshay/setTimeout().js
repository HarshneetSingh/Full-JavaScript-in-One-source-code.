// js doesnt wait for anyone ,first inner anonymous func forms a closure so this  function remembers the reference to i so where ever the goes it takes thi reference along with it 
// known as closeure .settimeout() takes callback function & stores it some place and attaches the timer and when the timer expires it takes that function in call stack and call the function.
function x() {
    var i = 11;
    setTimeout(() => {
        console.log(i);
    }, 1000);
    console.log("xenonGOD");

}
x();

// importance of closures

function y() {

    for (var i = 1; i <= 5; i++) {

        setTimeout(() => {
            console.log(i);
        }, i * 2000);


    }
    console.log("xenonGOD2");

}
y();
//i  is printing same because  for each and every copy of the function ehich is stored somewhere till the timer expires is pointing to the same sopt to the memeory and that is i this i which now become six
// bcz loop was continous running by the time this callback function gets a chance to ececute,by that time this i value has been changed bcz of this loop to si

function q() {

    for (let i = 1; i <= 5; i++) {

        setTimeout(() => {
            console.log(i);
        }, i * 1000);


    }
    console.log("xenonGOD2");

}

q();

// diff between let and var  of working in it is that let is block scope and it creates a new copy everytime this loop is executed
// and in var ..this copy of this i refers  to the same memory location 


// in below function we just wrapped with a function 
function w() {

    for (var i = 1; i <= 5; i++) {
        function close(val ) {
            setTimeout(() => {
                console.log(val);
            }, val * 2000);
        }

        close(i);

    }
    console.log("xenonGOD2");

} 

w();