//  if youve a fnction like below
console.log("star")
setTimeout(() => {
    console.log("callback");
}, 5000);

let startTime=new Date().getTime();
let endtime=startTime;
console.log(endtime);
console.log("star")

while(endtime<startTime+10000){
    endtime=new Date().getTime();
    console.log(endtime);
}
// console.log("star")

// and then 1 million line of code which take 10s to run this will create a prblm with settimeout function as its time will expire and will call into callback queue 
// but callback queue will not pass it to call stack as the main gat keeper EVENT LOOP will be checking the free space to execute in call stack .
// settimeout function will execute after executing of 1 million code which takes 10s.

// if ques arises 
/*
console.log("star")

setTimeout(() => {
    console.log("callback");
}, 0);

console.log("hell")

    here the output will be star then hell THEN CALLBACK !!! interesting right , 
    setTimeout will go through web api for registration and timer will set for 0 sec then 
    it will go through callback queue then EVENT LOOP WILL CHECK WETHER THE SPACE IN CALLSTACK IS AVAILABLE TO EXECUTE 
    
    CALLBACK QUEUE WILL GO TO EXECUTE ONLY AFTER THE MAIN CODE IS FULLY EXECUTED
    AS JS WAITS FOR NONE .
 */




