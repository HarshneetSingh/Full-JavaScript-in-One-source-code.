// call back function 

// js becoming ashynchnous lang 

    setTimeout(() => {
        console.log("time");
    }, 5000);
    function x(y) {
        a=10;
        y();
    }
    x(function y() {
        console.log("a is",a);
    })

    // here x has the responsibility of y its upto x when it wants to call func y so that is why it is called callback function 
    // in above function , y is a callback function
    // js has only one call stack

//blocking the main thread 

    // This means that long-running JavaScript functions can block the thread, leading to an unresponsive page and a bad user experience.

// event listener 

    // here is an example of closure with event listener ,just by wrapping with an attach func a closure will formed bcz count is accessing from its
    // parent scope
    
    // check demo in element and clicking button on html page and then click handler 


    function attach() {
        let count=0;
        document.getElementById("clickMe")
        .addEventListener("click",function xyz() {
            console.log("hello !! button is clicked ",++count)
        })
    }
    attach()
