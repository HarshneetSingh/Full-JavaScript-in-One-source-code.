// ?classes
// Classes are a template for creating objects. Classes are in fact "special functions", and 
// just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.


//* class declaration

// One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).


// console.log(Rectangle.constructor)  consoling it here will thorw reference error 

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
    printArea() {
        return `this is the area of the rectangle =>${this.calcArea()}`;
    }
}

// *classes hoisting 

/**
 * An important difference between function declarations and class declarations is that while functions can be called 
 * in code that appears before they are defined, classes must be defined before they can be constructed.
 *  Code like the following will throw a ReferenceError:
 */
console.log(Rectangle)


// *class expression
/**
 * A class expression is another way to define a class. Class expressions can be named or unnamed. 
 * The name given to a named class expression is local to the class's body. However, it can be accessed via the name property.
 */
let myRectangle1 = new Rectangle(10, 10);
console.log(myRectangle1.printArea()) // it will print the new rctangle with the width and height properties

// you cant hoist the class expression too

// *class constructor

/**
 * The constructor method is a special method for creating and initializing an object created with a class. 
 * There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if 
 * the class contains more than one occurrence of a constructor method.
 */

// *GETTER AND SETTER    

/* GETTER
 * The get syntax binds an object property to a function that will be called when that property is looked up.
 */

// *SETTER
//  In JavaScript, setter methods are used to change the values of an object. For example,

class square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }

    get calcArea() {
        return this.width * this.height;
    }

    set calcArea(num) {
        this.width = num;
        this.height = num;
    }

    get calcArea() {
        return this.width * this.height;
    }
    static validationOfTwoArea(a, b) {
        return a.calcArea === b.calcArea;
    }
}

let square1 = new square(2);
console.log(square1.calcArea)


let square2 = new square(9);
square2.calcArea = 2;
console.log(square.validationOfTwoArea(square1, square2)) // as sq1 is 4 and square2 is 9 therefore it is false  but with the help of setter 
//  im reseting the value of the calc area to 2 hence true

// *static is like helper to the function no instaces is called in it 


// ?inheritance and extends


class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    class(clas) {
        return `I'm in ${clas}`;

    }
}
class frontend extends person {
    constructor(name, age) {
        super(name, age)
    }
    technology(tech1, teach2, teach3) {
        return tech1 + " " + teach2 + " " + teach3;
    }

}
class Technology extends frontend {
    constructor(name, age, dev) {
        super(name, age)
        this.dev = dev
    }
    describe() {
        return `Im ${this.dev} developer`;
    }
}

let student = [
    new Technology("harshi", 12, 'frontend'),
    new Technology("htmlsingh", 21, 'backend')
]
function printingOfstudent(techs){
    
    for(let student of techs){
        console.log(student.describe())
    }

}
printingOfstudent(student)
// polymorphisim 

//?inheritance and extends

class person2 {
    constructor(name, age,clas) {
        this.name = name;
        this.age = age;this.clas = clas;
    }
    class(){
        console.log (`hello ${this.clas}`)
    }
}
class person3 extends person2 {
    constructor(name, age,clas) {
        super(name, age, clas);
    }
    clas(){
        super.class();
        return `hello boi`
    }
}
let polymorphisim=new person2("h",2,3);
console.log(polymorphisim)