//  *? promises

/*
    *The promise object returned by the new Promise constructor has these internal properties:

    *state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
    *result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.

    *then

    *The first argument of .then is a function that runs when the promise is resolved and receives the result.
    *The second argument of .then is a function that runs when the promise is rejected and receives the error.
    *If we’re interested only in successful completions, then we can provide only one function argument to .then:
    
    *catch

    *If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). 
    *Or we can use .catch(errorHandlingFunction), which is exactly the same:
*/


let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("normal promise "+'success')
    } else {
        reject('failed')
    }
})
p.then((ResolveMessage) => {
    console.log("this  message is the return value from promise function =" + ResolveMessage)
}).catch((FailedMessage) => {
    console.log("this  message is the return value from promise function =" + FailedMessage)
})


//** */ second example 

// *? doing it from normal call back function

let postNotLike = false;
let postLikeByMistake = true;

function instaAnalytics(callback, errorCallback) {
    if (postNotLike) {
        errorCallback({
            message: "tatti ne post like nahi kra"

        })
    } else if (postLikeByMistake) {

        callback({
            message: "bhai lul insta delete kr "
        })
    } else {
        console.log("normal call back function"+"tu mera sacha bhai hai")
    }
}
instaAnalytics((message) => console.log("normal call back function"+message.message), (errorMsg) => console.log("normal call back function"+errorMsg.message))

// some code as above in promise situation .

const analysisByPromise=new Promise((resolve,reject)=>{
  if (postNotLike) {
   reject({
        message: "tatti ne post like nahi kra"

    })
} else if (postLikeByMistake) {

    reject({
        message: "bhai lul insta delete kr "
    })
} else {
   resolve("tu mera sacha bhai hai")
}
})
analysisByPromise.then((message) => console.log("normal promise;;"+message)).catch( (errorMsg) => console.log("normal promise"+errorMsg.message))
console.log("helo")

// ** below code if theres only rsolve

let promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 0);
});

promise.then((function (message) {
    console.log("set time out prmise"+message);
}))


// ** below code if for rejction which throws error

// let promise2 = new Promise(function (resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// promise.then((function (message) {
//     console.log("set time out promise "message);
// }))



// ** below code Immediately calling ,We immediately have a resolved promise.

let promise3 = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });
promise3.then((result)=>console.log("normal promise"+result))


//   **example of results

// let promise4 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   // resolve runs the first function in .then
//   promise4.then(
//     result => alert("set time out "+result), // shows "done!" after 1 second
//     // error => alert(error) // doesn't run
//   );



//           **   code of practicing .catch   you cant right resolve in place of reject here it wont run
let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // .catch(f) is the same as promise.then(null, f)
  promise5.catch(function (error) {
    console.log("set time out promise "+error)
  });

  Promise.resolve(1).then(function resolve() {
    console.log(' normal promise :Resolved!');
  });


/*
        *        https://dmitripavlutin.com/javascript-promises-settimeout/


      Let's look again at the experiment from the event loop perspective. I'll make a step by step analysis of the code execution.

   * A) The call stack executes setTimeout(..., 0) and schedules a timer. timeout() callback is stored in Web APIs:

    setTimeout(function timeout() {
      console.log('Timed out!');
    }, 0);
    Promise.resolve(1).then(function resolve() {
      console.log('Resolved!');
    });
    Event Loop

   * B) The call stack executes Promise.resolve(true).then(resolve) and schedules a promise resolution. resolved() callback is stored in Web APIs:

    setTimeout(function timeout() {
      console.log('Timed out!');
    }, 0);
    Promise.resolve(1).then(function resolve() {
      console.log('Resolved!');
    });
    Event Loop

 *   C) The promise is resolved immediately, as well the timer is timed out immediately. Thus the timer callback timeout() is enqueued to task queue, the promise callback resolve() is enqueued to job queue:

    Event Loop

   * D) Now's the interesting part: the event loop priorities dequeueing jobs over tasks. The event loop dequeues the promise callback resolve() from the job queue and puts it into the call stack. Then the call stack executes the promise callback resolve():

    setTimeout(function timeout() {
      console.log('Timed out!');
    }, 0);
    Promise.resolve(1).then(function resolve() {
      console.log('Resolved!');
    });
    'Resolved!' is logged to console.

    Event Loop

  *  E) Finally, the event loop dequeues the timer callback timeout() from the task queue into the call stack. Then the call stack executes the timer callback timeout():

    setTimeout(function timeout() {
      console.log('Timed out!');
    }, 0);
    Promise.resolve(1).then(function resolve() {
      console.log('Resolved!');
    });
    'Timed out!' is logged to console.

    Event Loop

 *   The call stack is empty. The script execution has been completed.
*/  

function delay(ms) {
  return new Promise((resolve,reject)=> {
    setTimeout(resolve, ms);
  })
  
}

delay(3000).then(() => console.log('runs after 3 seconds'));