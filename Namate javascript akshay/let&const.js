// differentiatng hoisting of let and var 

/* 

    //temporal dead zone = a phase from hoisting a variable to the phase of its initialisation 

    // when you try to access a variable inside a temporal dead zone will throw a reference error

    // if we put it before initialising let a ,console.log(a);= this will throw reference error

    // reference error is thrown if javascript engine tries to accesse a speciic  variable which is not in the memory space  

    // why let gets space in a different place of memory while hoisting one of its variable?

     ans // the var x is undefined and stored inside the global object and the let z is also undefined 
         // but stored at another place named Script, It means they both are not the same and the javascript 
         // engine wants to differ something during their access. The let and const variables are not accessible
         // before they are initialized with some value, and the phase between the starting of the execution of block 
         // in which the let or const variable is declared till that variable is being initialized is called 
         // Temporal Dead Zone 
    
    
    // Therefore, a let (or const) variable’s TDZ ends when JavaScript fully initializes it with the value specified during its declaration.

        However, a var variable’s TDZ ends immediately after its hoisting (as just after hoisting it, placeholder undeifined is added to it )—not when the variable gets fully initialized with the value specified during its declaration.
*/

const a = 12;
console.log(a);
var b = 4;
/*
    //"you cannot redeclare let and const as that will throw syntax error"
       and your code wont print anything ifs theres a single sntaxerror 
       "redeclaring variable will throw syntax  error " 
       example = let and const
       
    //"declaring const and initialising const later will throw type error"
       "type error is thrown if's there is the prblm between type "
    
    // "const variables are declared and initialised in single line only"
    
*/

// you can be saved by tdz just by doing = keeping decleration and initialisation on the top first then go to the logic part. 