
// Brendan Eich created js in spider monkey 

// to run a code you need a environment to run a code and theres a browser runtime environment ehich has js engine ,api , event loop task quueue to mucri queue
// and a node.js code needed a JavaScript runtime environment to run

// v8 is the js engine in chrome 

// js runtime environment which is as broweser 
// process of execution of js code in js engine 
/*
    parsing 
    compilation
    execution

    parsing converts code into tokens for ex

    let a =7
    it will break into let , a , =, 7
    then theres a SYNTAX PARSER

    syntax parser converts code into ast(abstract syntax tree)check it on ast explorer , json.

    this ast is generated throught parsing level .

    NOW THIS AST PASSES TO COMPILATION LEVEL 

    IN COMPILATION THERES A JIT(JUST IN TIME COMPILATION LANGAUGE)
    IT means js engines can use interpreter as well compiler .

    ast code goes into interpreter and interpreter convert it into byte code and moves it to execution step while doing so
    it takes the help of compiler to optimise the code . compiler basically  talks to the interpreter while the code in interpreting line by line.
    the compiler tries to optimise the code as much as it can .its a multiple phase process . all js engines has there own algorithm of doing it.

    here job of compiler is to optimise the code as much as it can on the runtime that is why it is called jit compilation

    aot take the code which executed later and optimise throught the compiler and takes the code into executionit is possible with two things memory heap and call stack 
    
    memory heap is sync with garbage collector callstack etc  , this all works together . all the memory is store in it 

   js  gc name is orinoco, oilpan  . gc (garbage collector)helps js engine in freeing up space in memory heap as much as it is possible . it has it own algorithm knoen as mark and sweep algorithm 
    
    there are other optimisaton which compiler does while otimising the code .inlining , inlining caching and copy elision 

   js  interpretter name is ignition
   js compiler name is turbo fan , optimising compiler


   google knowlegde 

   So JS engines typically have some sort of tier-up strategy, roughly: the first time a function is called, it's executed by the interpreter. If it runs long/often enough, it'll be compiled by a 
   quick non-optimizing compiler. If it runs even longer ("hotter"), it'll be compiled by an optimizing compiler.

   In computer science, program optimization, code optimization, or software optimization, is the process of modifying a software system to make some aspect of it work more efficiently or use fewer resources.
   
   inline caching 

   https://miro.medium.com/max/875/1*91tK2rV7Ci_KIKQ7MMwYoQ.png

   Let’s analyze what the above code does. We create a function that takes an argument and return template string. Next, we create a userName object with keys — firstName and lastName. Now, we call
    function printUserName with argument of userName object several times.

    So, what V8 engine or many other JavaScript engine does is that first they run the function normally as you would expect. But, after some time when the function is called repeatedly, they assume 
    or they act smart and just equals the repeated function calls to what the function returns to save time and improve the efficiency or speed. In this case, they equals

    printUserName(userName) = “Hello John Doe”

    This is called or better known as Inline Caching. 

    defination according to wikipedia
    Inline caching is an optimization technique employed by some language runtimes, and first developed for Smalltalk.[1] The goal of inline caching is to speed up runtime method binding by remembering 
    the results of a previous method lookup directly at the call site. Inline caching is especially useful for dynamically typed languages where most if not all method binding happens at runtime and where
     virtual method tables often cannot be used.

     copy elision
     Copy elision (or Copy omission) is a compiler optimization technique that avoids unnecessary copying of objects
    */