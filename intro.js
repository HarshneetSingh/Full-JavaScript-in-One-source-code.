/*                          JAVASCRIPT BASIC IN ONE CODE 
                                  BY HARSHNEET SINGH
                                  FREE CODE CAMP 
         instagram    =     @coder.singh && @harshneet.0_o
         twitter      =             @XenonSingh
*/

// --------------------------------COMMENT-----------------------------


// inline Comment

/* multi-line Comment
  k bhkb
  LFNl nflN 
  Ljl j
*/

//--------------------------------DATA TYPES----------------------------


/*
undefined
null
boolean
string
symbol
number
and object
*/


// 1
// var will be workind in the whole program


var myName = "XenonSingh";

//var can be updated too

myName = "harshneet singh";

//2
//let work in a given section only 
let ourName = "Xaddy";


//3
//const will be constant in whole program with this value only and it cant be changed 
const pi = 3.14;




//-----------------------------STORING VALUE WITH ASSIGNMENT OPERATORS---------


var a;
//here now 2 will be assigning to b;
var b = 2;
console.log(a);
console.log(b);

a = 7;

b = a;
console.log(a);
console.log(b);




//--------------------------------INITIALISING VARIABLES W/ ASSIGNMENT OPERATORS---------

console.log("-------INITIALISING VARIABLES W/ ASSIGNMENT OPERATORS-------")

// intitialized these three variables

var a = 5;
var b = 4;
var c = "i am a ";

a = a + 10;
b = b + 10;
c = c + "string";

console.log(a);
console.log(b);
console.log(c);




//-------------CASE SENSITIVE IN VARIABLES------

console.log("-------JAVASCRIPT IS CASE SENSITIVE------- ");
//WHICH means capitalization matters

//we can use camelcase

var flexBox;
var harshneetSingh;
var xenonSingh;

flexBox = 10;
harshneetSingh = "name";
xenonSingh = 1;



//----------basic maths---------


console.log("-------adding 10 +10  -------");
var adding = 10 + 10;
console.log(adding);

console.log("-------subtracting 10 -10  -------");
var subtracting = 10 - 10;

console.log(subtracting);

console.log("-------multiplying 10 *10  -------");
var multiplying = 10.0 * 10.5;
console.log(multiplying);

console.log("-------dividing 10 /10  -------");
var dividing = 10 / 10;
console.log(dividing);



//---------------------increment and decrement-----------

var myVar = 100;
console.log("-------increment-------");

myVar++;
console.log(myVar);
console.log("-------decrement-------");

myVar--;
console.log(myVar);


//---------------decimal numbers-----

// same as integer

//---------------------------finding a remainder--------

console.log("-------remainder of 11 divided by 3 is -------");

var remainder = 11 % 3;
console.log(remainder);


//--------------------compound assignments with augmented ADDITION---------  shortcut basically----

console.log("-------compound assignments with augmented ADDITION-------")
var a = 5;
var b = 4;
var c = "i am a ";
// just modified above code  just by a=a+10   ==  a+=10;
a += 10;
b += 10;
c += "string";

console.log(a);
console.log(b);
console.log(c);


//--------------------compound assignments with augmented subtraction---------  shortcut basically----

console.log("-------compound assignments with augmented SUBRTACTION-------")
var a = 5;
var b = 4;
var c = 15;
// just modified above code  just by a=a-10   ==  a-=10;
a -= 10;
b -= 10;
c -= 10;

console.log(a);
console.log(b);
console.log(c);

//--------------------compound assignments with augmented MULTIPLICATION ---------  shortcut basically----

console.log("-------compound assignments with augmented MULTIPLICATION-------")
var a = 5;
var b = 4;
var c = 15;
// just modified above code  just by a=a*10   ==  a*=10;
a *= 10;
b *= 10;
c *= 10;

console.log(a);
console.log(b);
console.log(c);


//--------------------compound assignments with augmented DIVIDING---------  shortcut basically----

console.log("-------compound assignments with augmented DIVIDING-------")
var a = 5;
var b = 4;
var c = 15;
// just modified above code  just by a=a/10   ==  a/=10;
a /= 10;
b /= 10;
c /= 10;

console.log(a);
console.log(b);
console.log(c);



//-----------DECLARING STRING VARIABLES-------------
console.log("-------declaring string-------");
var myFirstName = "harshneet";
var myLastName = " singh";

console.log(myFirstName + myLastName);


// -----------------escaption lateral quotes------------

console.log("------escaption lateral quotes------");
console.log("double quotes");
var myStr = "hello my name is \"harshneetSingh\" and my ingame name is \"xenonSingh\"";
console.log(myStr);

console.log("single quotes");

var myStr = 'hello my name is "harshneetSingh" and my ingame name is "xenonSingh"';
console.log(myStr);

console.log("backticks")
// in backticks we can use both single quotes as well double qoutes
var myStr = `'hello my name is "harshneetSingh" and my ingame name is "xenonSingh"'`;
console.log(myStr);

// --------------------escape sequences--------
console.log("---------------escape sequences-------------")
/**** 
code   output 
\'     single  qoute
\"     double qoute
\\     backslash 
\n     newline
\r     carriage return
\t     tab
\b     backspace 
\f     form feed
****/
var myStr = 'hello my name is \n\t\\"harshneetSingh" \nand my ingame name is "xenonSingh"';
console.log(myStr);



//----------concatinating strings with plus operator ---------
console.log("----------concatinating strings with plus operator----------")

var myname = "harshneet " + "singh";
console.log(myname);

// or 

myname += "kanjwani";
console.log(myname);



//--------constructing string with variables------------
console.log("---------constructing string with variables------------");

var myname = "harshneet singh ";

myStr = "hello my name is " + myname + " and my ingame name is xenonsingh";
console.log(myStr);


//----appending variables to strings----

console.log("-------appending variables to strings-----------");

var anadjective = "awesome!";
var myname = "harshneet singh is ";

myname += anadjective;

console.log(myname);


// ---------finiding length of the string--------

console.log("----finiding length of the string--");
var myNameLength = 0;
var myName = "harshneet singh";
// space also count in a length.
myNameLength = myName.length;
console.log(myNameLength);


//-------bracket notation to find first character of an string---

console.log("----bracket notation to find first character of an string---");
var firstCharOfString = "";
var myStr = 'hello my name is \n\t\\"harshneetSingh" \nand my ingame name is "xenonSingh"';

firstCharOfString = myStr[0];
console.log(firstCharOfString);

//-----------UNDERSTANDING STRING IMMUTABILITY----
console.log("----UNDERSTANDING STRING IMMUTABILITY ---");

var myStr = "JELLO WORLD";

myStr = "hello world";

console.log(myStr);

//----------FIND THE NTH NUMBER OF THE STRING----

console.log("---------FIND THE NTH NUMBER OF THE STRING-------");

var secondcharOfStr;

secondcharOfStr = myStr[1];
console.log(secondcharOfStr);


//-----bracket notation to find last character in string---
console.log("---------FIND THE last char OF THE STRING-------");

var lastCharOfString = myStr[myStr.length - 1];
console.log(lastCharOfString);

//-----FIND THE char from the last OF THE STRING---
console.log("---------FIND THE char from the last OF THE STRING-------");

var secondToLastOfString = myStr[myStr.length - 2];
console.log(secondToLastOfString);


//----word BLANKS------

console.log("----word blanks basically this will make sentance funny or senseable");

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The" + myAdjective + myNoun + myVerb + "to the store" + myAdverb;
  return result;
}

//change the word here to test your functions
console.log(wordBlanks(" dog", " big", " ran ", " quickly"));
console.log(wordBlanks(" lady", " beautiful", " running ", " quickly"));
console.log(wordBlanks(" simpy", " rani", " bhaagi  ", " quickly"));


//-------ARRAYSSSSSSSSSSSSSS--------------
console.log("arryaassssss");


var myArray = ["harshi", 19];

console.log(myArray[1]);

//-----nest arrays----

console.log("------nest arryaassssss-----");

var ourArray = [["John", 23], ["harshneetSingh", 19]];

console.log(ourArray[1]);


//--------------MODIFY ARRAY DATA USING INDEX-----
console.log("------MODIFY ARRAY DATA USING INDEX-----");

var myArray = ["harshi", 19, 12, 913];

myArray[0] = "hello";
myArray[2] = 11;
console.log(myArray);

//-----access multi dimensional arrays-----
console.log("------access multi dimensional arrays-----");

var ourArray = [["John", 23], ["harshneetSingh", 19], [["harshi", 18, "xenon"], "ez", "pz"]];

var myData = ourArray[2][0];
var myData2 = ourArray[2][0][1];
console.log(myData);
console.log(myData2);

//------PUSH() =APPEND AN ELEMENT IN ARRAY OR ADD AN CHILD ARRAY IN PARENT ARRAY----

console.log("------push()-----");
var ourArray = [["John", 23], ["harshneetSingh", 19], [["harshi", 18, "xenon"], "ez", "pz"]];

ourArray.push([12, 23, ["hello"]]);
console.log(ourArray);

//-------pop() = remove last element from the array---

console.log("------pop()----");
var ourArray = [["John", 23], ["harshneetSingh", 19], [["harshi", 18, "xenon"], "ez", "pz"]];

var removedFromOurArray = ourArray.pop();
console.log(ourArray);

//-------shift() = remove first element from the array-----

console.log("-----shift()-----");
var ourArray = [["John", 23], ["harshneetSingh", 19], [["harshi", 18, "xenon"], "ez", "pz"]];

var removedFromOurArray = ourArray.shift();
console.log(ourArray);

//-------unshift() =after removing first element you can add another dome element in first position by using unshift() from the array-----

console.log("-----unshift()-----");
var ourArray = [["John", 23], ["harshneetSingh", 19], [["harshi", 18, "xenon"], "ez", "pz"]];

ourArray.shift();
ourArray.unshift(["daddy", 52]);

console.log(ourArray);


//-----shopping list by array----
console.log("-----shopping list by array------\n")
var ourArray = [
  ["hamburger", 23],
  ["steak", 19],
  ["rice", 18]
];

ourArray.push(
  ["banana", 6]
);

ourArray.push(
  ["chips", 12]
);
console.log(ourArray);

//----write reusable with functions----
console.log("-----write reusable with functions------\n")

function reusableFunction() {

  console.log("hello cuties");
}
reusableFunction();

//----passing values to the function with argument----

console.log("----passing values to the function with argument----");
function functWithArgs(a, b) {
  console.log(a + b);
}

functWithArgs(10, 21);

//-----global scope------
console.log("-----global scope------");
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal :" + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal :" + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

//-----local scope------



console.log("-----local scope------");
// var myGlobal=10;

// function func1(){
//    var myLocal=5;
// }
// function func2(){

// }
// console.log(myLocal);
// it will throw erro printing my local out of the function because mylocal has been declared in function with var 
// if it was without var then it wouldve been run as without var it is declared as global.


// fun1();
// func2();

//--------------------global vs local scope in functions----------------------------------


console.log("-------global vs local scope in functions----------");

var outerWear = "t-shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear)

//------return a value from a function-----

console.log("---return a value from a function---");

function returnValue(num) {
  return num * 10;
}
console.log(returnValue(10));
console.log(returnValue(4));
console.log(returnValue(3));

//-----undefined value returned-----

console.log("----undefined value returned----");

var sum = 0;
function addThree() {
  return sum = sum + 3;
}
function addFive() {
  sum += 5;
}

console.log(addThree());
// console.log(addFive());
// if we log this out addthree would be undefined as  


//------assignment with a returned value-----
console.log("----assignment with a returned value----");

var changed = 0;

function change(num) {
  return (num * 10) / (num * 2);
}

changed = change(10);
console.log(changed);

//-------stand in linee----

// this function will pop out the first element from the array and add a new one in the end...


console.log("-------stand in linee----");
function funcArrNew(arr, num) {
  arr.push(num);

  return arr.shift();
}
var funcArr = [1, 2, 3, 4, 5];

console.log("befor :" + JSON.stringify(funcArr));
console.log(funcArrNew(funcArr, 6));
console.log("after :" + JSON.stringify(funcArr));



//----- boolean values-----

console.log("----- boolean values-----");
var booltrue = true;
var boolfalse = false;

function boolfunction() {
  return false;
}

//-------------------if else statement--------------

console.log("------if else statement--------");

function answer(option) {
  if (option == true) {
    return "yes the answer is true";
  }
  return "no, the answer is false";

}


console.log(answer(true));

//----EQUALITY OPERATORS------
console.log("------EQUALITY OPERATORS--------");

//THREE OPERATORS  TO BE DEFINED
// 1st (=)-: This (=)is used for assigning a value to the variable.
// 2nd (==)-: This (==) is used for comparison between two variables irrespective of the datatype of variable.
// 3rd (===)-: This(===) is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.

var num = 10;
function test(num) {
  if (num === 10) {
    return "equal";
  }
  return "not equal";
}

var num = 10;

console.log(test(num));
function test(num) {
  if (num == "10") {
    return "equal";
  }
  return "not equal";
}

console.log(test(num));

// more operator 
/* 
!
<
<=
<==
>
>=
>==
*/
console.log("more operator");
if (num <= 100) {
  console.log(num + " is less than 100");
}
if (num >= 100) {
  console.log(num + " is more than 100");
}
if (num != 100) {
  console.log(num + " is not equal to 100");
}

// -----AND /OR OPERATOR----
console.log("logcal AND operator");

var age = 20;


if (age >= 10 && age <= 30) {
  console.log("you're eligible in high school");
}


console.log("logcal OR operator");



function agee(num) {
  var result = "";
  if (age >= 10 || age <= 30) {

    result = "ur eligible in high school";
  }
  else {
    result = "ur not elegible";
  }
  return result;
}

console.log(agee(15));

//----else if statements----

console.log("---else if statements--");
//order should be followed by making if else statement..
var num = 10;

if (num > 10) {
  console.log("num is greater than 10");
}
else if (num < 10) {
  console.log("num is less than 10");
}
else (num == 10)
console.log("num is equal to 10");


// writing chain if else 
console.log("---writing chain if else --");

function chained(num) {
  if (num < 5) {
    return "tiny";
  }
  else if (num < 10) {
    return "small";
  }
  else if (num < 15) {
    return "medium";
  }
  else if (num < 20) {
    return "large";
  }
  else {
    return "huge";
  }
}

console.log(chained(10));

//----golf code----
// basically this code will tell how good your strokes were according to your par;

console.log("gold code");
var nameScore = ["hole-in-one", "eagle", "birdie", "par", "bogey", "double bogey", "go home"]
function golfScore(par, strokes) {
  if (strokes == 1) {
    return nameScore[0];
  }
  else if (strokes <= par - 2) {
    return nameScore[1];
  }
  else if (strokes == par - 1) {
    return nameScore[2];
  } else if (strokes == par) {
    return nameScore[3];
  } else if (strokes == par + 1) {
    return nameScore[4];
  }
  else if (strokes == par + 2) {
    return nameScore[5];
  }
  else {
    return nameScore[6];
  }
}

console.log(golfScore(5, 7));

//--------SWITCH STATEMENTS------
console.log("-----SWITCH STATEMENTS----");

function switchFunction(value) {
  var answer = "";
  switch (value) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gama";
      break;
    case 4:
      answer = "delta";
      break;
    case 5:
      answer = "seta";
      break;
  }
  return answer;
}
console.log(switchFunction(3));


// switch default statement

console.log("-----SWITCH DEFAULT STATEMENTS----");


function switchFunction(value) {
  var answer = "";
  switch (value) {
    case "a":
      answer = "alpha";
      break;
    case "b":
      answer = "beta";
      break;
    case "c":
      answer = "gama";
      break;
    case "d":
      answer = "delta";
      break;
    case "e":
      answer = "seta";
      break;
    default:
      answer = "enter valid char";
      break;
  }
  return answer;
}
console.log(switchFunction("a"));
console.log(switchFunction("3"));


//----- multiple identical options in switch statements----

console.log("-----multi idenical options in switch------ ");

function switchFunction(value) {
  var answer = "";
  switch (value) {
    case "a":
    case "b":
    case "c":
      answer = "gama";
      break;
    case "d":
    case "e":
    case "f":
      answer = "delta";
      break;
    case "g":
    case "h":
    case "i":
      answer = "seta";
      break;
    default:
      answer = "enter valid char";
      break;
  }
  return answer;
}
console.log(switchFunction("a"));
console.log(switchFunction("i"));

console.log(switchFunction("3"));

//-----RETURNING A BOOLEAN VALUE FROM FUNCTION----
console.log("----RETURNING A BOOLEAN VALUE FROM FUNCTION----");
function aIsLessThanB(a, b) {
  return a < b;
}
console.log(aIsLessThanB(4, 6));
console.log(aIsLessThanB(8, 6));


//-----return early pattern for functions----

console.log("---return early pattern for functions----");

function aBtest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return a < b;

}

console.log(aBtest(1, 9));
console.log(aBtest(-1, 9));

//----counting cards---


console.log("---counting cards---");
var count = 0;
function cc(cards) {

  switch (cards) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "k":
    case "A":
      count--;
      break;

  }
  var holdbet = "hold";
  if (count > 0) {
    holdbet = "bet";
  }
  return count + " " + holdbet;
}
cc(2), cc(3), cc(3), cc("Q");
console.log(cc(3));


//------------------- ----building objects in javascripts---------------------------------

console.log("----build object---");

var testObj = {
  "name": "harshneet singh",
  "my age": 19,
  "age": 19,
  "hobbies": ["gamer", "coder"],
  17: "My birthdate"
};

//---------accesing objects-----

var objName = testObj.name;

// so basicaaly there are two option to access objects

// if there are no space in variable name then you can use below one

var objAge = testObj.age;

//or

// if there are space in variable name then you can use below one and you can use it with no spaces to
var objmy_Age = testObj["my age"];
var objmy_Age2 = testObj["age"];

var objHobbies = testObj.hobbies;
console.log(objName);

console.log(objAge);
console.log(objmy_Age);
console.log(objmy_Age2);


console.log(objHobbies);
console.log(objHobbies[0]);
console.log(objHobbies[1]);

//accessing objects by variable 

var whatsOnThisDate = 17;
var thisDate = testObj[whatsOnThisDate];

console.log(thisDate);


//------updating objects properties----
console.log("------updating objects properties----");
testObj.name = "Harshneet singh kanjwani";
var newName = testObj.name;
console.log(newName);


//----Add new properties to object-----
console.log("updating new properties");
testObj.ingameName = "XenonSingh";

// or
testObj["2003"] = "birthYear";
testObj["ing name"] = "XenonSingh";
console.log(testObj);


//----delete  properties from object-----
console.log("--delete  properties from object---");
delete testObj["ing name"];
console.log(testObj);


//-----object for lookups----
console.log("--subsitute for switch case by object");

// switch

function switchFunction(value) {
  var result = "";
  switch (value) {
    case "alpha":
      result = "alpha";
      break;
    case "bravo":
      result = "beta";
      break;
    case "charlie":
      result = "gama";
      break;
    case "delta":
      result = "delta";
      break;
    case "echo":
      result = "seta";
      break;

  }
  return result;
}
console.log(switchFunction("delta"));

function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}
console.log(phoneticLookup("delta"));

//-------testing object for properties via functions-----

console.log("----testing object for properties via functions----");

var testObj = {
  "name": "harshneet singh",
  "my age": 19,
  "age": 19,
  "hobbies": ["gamer", "coder"],
  17: "My birthdate"
};
// here The hasOwnProperty() method in JavaScript is used to check whether the object has the specified property as its own property. This is useful for checking if the object has inherited the property rather than being it’s own.
function checkobj(checkprop) {
  if (testObj.hasOwnProperty(checkprop)) {

    return testObj[checkprop];
  } else {
    return "not found";
  }
}
console.log(checkobj(19));

// or (in)
function checkobj(checkprop) {
  if (checkprop in testObj) {

    return testObj[checkprop];
  } else {
    return "not found";
  }
}
console.log(checkobj("age"));

// ------manipulating complex objects----
console.log("----accessing nested arrays----");
var myArr = [
  {
    "artist": "harshneetSingh",
    "title": "XenonSingh",
    "release_Year": 2003,
    "formats": ["games", "cds", "Lp",],
    "gold": true
  }
]
// accessing complex objects 
//console.log(myArr[0].propname[if arr any])
console.log(myArr[0].formats[1]);

//-------------- ACCESSING NESTED OBJECTS--------------
console.log("----accessing nested objects----");

var myArr =
{
  "artist": {
    "title": "XenonSingh",
    "release_Year": 2003
  },
  "formats": {
    "hello": ["games", "cds", "Lp",],
    "gold": true
  }
}

var accesingNestedObg = myArr.artist.title;
console.log(accesingNestedObg);
var accesingNestedObg = myArr.formats["hello"][0];

console.log(accesingNestedObg);

//----record collection project----
console.log("----record collection project----");

var collection = {
  1000: {
    "artist": "sidhu moodewala",
    "age": 29,
    "album": "moosaTape",
    "tracks":
      ["295",
        "US"]
  },
  2000: {
    "artist": "bhai anantvir singh",
    "age": 30,
    "album": "kirtan",
    "tracks":
      ["Uth naam jap",
        "maadho"]
  },
  3000: {
    "artist": "manpreet singh",
    "age": 40,
    "album": "kirtan",
    "tracks":
      ["bang ke bangali",
        "akj"]
  }
}

function updateCollection(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  }
  else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  }
  else {
    collection[id][prop] = value;
  }
  return collection;
}
updateCollection(3000, "age", 50);
console.log(updateCollection(3000, "tracks", "waheguru"));

//------iterate with while loops-----#
console.log("----iterate with while loops----");


var myArr = [];
var i = 0;
while (i < 5) {
  myArr.push(i + 1);
  i++;
}
console.log(myArr);

//----for loops---
console.log("----iterate with for loops----");
var myArr = [];
for (var i = 0; i < 10; i++) {
  myArr.push(i + 1);
}
console.log(myArr);

//----iterating odd numbers wit for loop---
console.log("----iterate even numbers with for loops----");
var myArr = []
for (var num = 0; num < 10; num++) {
  if (num % 2 == 0) {
    myArr.push(num);
  }
}
console.log(myArr);
// or
var myArr = []

for (var num = 0; num < 10; num += 2) {
  myArr.push(num);
}
console.log(myArr);

console.log("----iterate odd numbers with for loops----");

var myArr = []

for (var num = 0; num < 10; num++) {
  if (num % 2 != 0) {
    myArr.push(num);
  }
}
console.log(myArr);
var myArr = [];

// or
for (var num = 1; num < 10; num += 2) {
  myArr.push(num);
}

console.log(myArr);

//------count backwards with a for loop-----

console.log("----count backwards with a for loop----");
var myArr = [];

for (let num = 10; num > 0; num--) {
  myArr.push(num);
}
console.log(myArr);


//-----will add all number of the array----
console.log("----will add all number of the array ----");

var myArr = [1, 2, 3, 4, 5, 6];
var ourArr = 0;

for (var i = 0; i < myArr.length; i++) {
  ourArr += myArr[i];

}
console.log(ourArr);

//-----this will make a same copy of my array in another array----
console.log("----this will make a same copy of my array in another array----");

var myArr = [1, 2, 3, 4, 5, 6];
var ourArr = [];

for (var i = 0; i < myArr.length; i++) {
  ourArr.push(myArr[i]);

}
console.log(ourArr);


//----nesting for loop---

// multiply functions
console.log("----multiply functions----");


function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {

      product = product * arr[i][j];

      console.log("INDEX  " + [i] + "X" + [j]);

      console.log("ELEMENT  " + "=" + arr[i][j]);
    }

  }
  return "total = " + product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


//----do while loop-----
console.log("----do while loop-----");
var myArr = [];
var i = 0;

do {
  myArr.push(i);
  i++;
} while (i < 15);
console.log(i, myArr);

//-----profile lookup-----
console.log("----profile lookup-----");

var profiles = [

  {
    "firstname": "harshneet",
    "lastname": "singh",
    "age": 19,
    "likes": ["coding", "badminton", "gyming"]

  },
  {
    "firstname": "harmeet",
    "lastname": "singh",
    "age": 20,
    "likes": ["coding", "cricket", "gyming"]

  },
  {
    "firstname": "tejas",
    "lastname": "singh",
    "age": 19,
    "likes": ["coding", "kirtan", "gyming"]
  }
]

function lookUpProfile(name, prop) {

  for (var i = 0; i < profiles.length; i++) {
    if (profiles[i]["firstname"] === name) {
      return profiles[i][prop] || "no such property";
    }

  }
  return "no such contacts";
}

var data = lookUpProfile("harmeet", "age");
console.log(data);

//random fractions and whole numberss---


//      result = Math.round(Math.random() * (max - min)) + min;
//      result = Math.floor(Math.random() * (max - min + 1)) + min;

//      | result | Math.round() | Math.floor() |
//      |:------:|:------------:|:------------:|
//      |    0   |  0.0 - 0.499 |   0 - 0.999  |
//      |    1   |  0.5 - 1.499 |   1 - 1.999  |
//      |    2   |  1.5 - 2.499 |   2 - 2.999  |
//      |    3   |  2.5 - 2.999 |   3 - 3.999  |

console.log("----random fractions and whole numberss-----");

function randomnumber1() {

  return Math.random();
}

console.log(randomnumber1());

//whole number 

console.log("--whole number--");
function randomnumber2() {

  return Math.floor(Math.random() * 100);
}

console.log(randomnumber2());

//------ generate random whole numbers within a range----

console.log("---- generate random whole numbers within a range---");
function randomnumber3(max, min) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomnumber3(10, 5));

// ----parseInt function----
console.log("---- parseInt function---");


function changeStrToInt(str) {
  return parseInt(str);
}
var convertedNumber = changeStrToInt("50");
console.log(convertedNumber);

//-----passing parsint function with radix----

//   the radix is like a base value like binary octa hexa 
//   if we want to to convert a binary digit number to a integer 

console.log("---passing parsint function with radixr---");

function changeStrToIntWithBinary(str, base) {
  return parseInt(str, base);
}
var convertedNumber = changeStrToIntWithBinary("0111", 2);
console.log(convertedNumber);


//----use the conditional ternary operatorrr-----
// it is an shortcut of if else =one line statement
console.log("---ternary operator---");
function ternaryOpt(a, b) {
  // return a===b?true:false;
  // or
  return a === b;

}
console.log(ternaryOpt(10, 10));

// ---multiple ternary operator in single statement---
// nested ternary
console.log("---nested ternary---");

function nestedTernary(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(nestedTernary(50));

// difference between var and let
console.log("---difference between var and let---");
let cateName = "shreya";
let qoute;
cateName = "sakshi";

function catTalk() {
  "use strict";
  cateName = "reet";
  qoute = cateName + " says meow";
  return qoute;
}

console.log(catTalk());

// ----block scope and function scope---
console.log("---block scope and function scope---");

function funcBlocScope() {
  "use strict";
  let k = "function scope";

  if (true) {
    let k = "block scope";
    console.log("block scope k is :" + k);
  }
  console.log("function scope k is :" + k);
  return k;

}
funcBlocScope();

// ---const keyword---


console.log("---const keyword---");

function printManyTimes(str) {
  const sentance = str + " is good boy";

  for (let i = 0; i < str.length; i++) {
    console.log(sentance);

  }
  // return sentance;
}

printManyTimes("XenonSingh");

// ----------mutate or update an array declared with const--------
console.log("----mutate an array declared with const----");
const l = [1, 3, 4];

function UpdatedL(arr, num1, num2, num3) {
  arr[0] = num1;
  arr[1] = num2;
  arr[2] = num3;
  console.log(arr);
}

UpdatedL(l, 10, 12, 23);

// -----prevent array and object mutation----
console.log("-----prevent array and object mutation----")
function freeobj() {
  const math_constant = {
    PI: 3.14
  }
  Object.freeze(math_constant);
  // with the help of freeze method we can freeze the array or an object.
  try {
    math_constant.PI = 99
  } catch (ex) {
    console.log("ex");

  }
  return math_constant.PI;
}

const PI = freeobj();

console.log(PI);

// ----arrow function---
console.log("-----arrow functions-----");

const magic = () => new Date();
console.log(magic());
// ----arrow function passing with parameters---
console.log("-----arrow functions passing with parameters-----");

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [234, 38]));

//arrow function with higher order----
console.log("-----arrow functions with higher order-----");


const realNumberArray = [12, 234, 23.4, 24, 24.21, 1, 0];

const squareList = (arr) => {
  const squaredInteger = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);

  return squaredInteger;

}

const squaredInteger = squareList(realNumberArray);

console.log(squaredInteger);

//----default parameters---

// const increment
console.log("----default parameters---");
function increment(number, increment_by = 1) {
  return number + increment_by;
}
console.log(increment(5));

console.log(increment(5, 3));

//---- rest operator----
console.log("----rest operator---");
// basically rest operator helps arguments to convert in array

// const sum1 =(function () {
//   return function sum1(x,y,z) {
//     const args=[x,y,z];
//     return args.reduce((a,b)=>a+b,0);
//   }
// })();
// console.log(sum1(1, 2, 3));
const sum1 = (function () {
  return function sum1(...args) {
    return args.reduce((a, b) => a + b, 0);
  }
})();
console.log(sum1(1, 2, 3));

// -----spred operator---

console.log("----spread operator---");
// arr2=arr1 is like ki we are just making arr2 equal to arr 1  but with the help of spread opt we breaking that link
const arr1 = ["hey", "my", "name", "is", "xenon"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "hello";

}
)();
console.log(arr2);

//-----distructing assingments----
console.log("---distructing assingments---")
var voxel = {
  x: 23,
  y: 12,
  z: 13,
}

var x = voxel.x;// x=23
var y = voxel.y;//y=12
var z = voxel.z;//z=13

// theres ease way to assing like these


const AVG_TEMPERATURE = {
  today: 77.8,
  tomorrow: 90.8,
};

function getMeTomTemp(obj) {
  const { tomorrow: TomTemp } = obj;
  return TomTemp;
}
console.log(getMeTomTemp(AVG_TEMPERATURE));

//----nested distructing assignements-----
console.log("---distructing nested assingments---")

const LOCAL_TEMPERATURE = {
  today: { min: 77.8, max: 90 },
  tomorrow: { min: 71.8, max: 96 }
};

function getMeTomMaxTemp(obj) {
  const { tomorrow: { max: maxTomTemp } } = obj;
  return maxTomTemp;
}
console.log(getMeTomMaxTemp(LOCAL_TEMPERATURE));
// -----use destructuring assignment to assign variables from arrays----

console.log("use destructuring assignment to assign variables from arrays")
const [A, B, , C] = [1, 2, 3, 4, 5, 6];

console.log(A, B, C);

var a = 5, b = 4;
(() => {
  [a, b] = [b, a];

}
)();
console.log(a);
console.log(b);

// -----use destructuring assignment with rest operator----
console.log("---use destructuring assignment with rest operator---")

const badaArray = [1, 2, 3, 4, 5, 6, 7, 8];

function removeFirstTwo(list) {
  const [, , ...chothaArray] = list;
  return chothaArray;
}
console.log(badaArray)
const chothaArray = removeFirstTwo(badaArray);

console.log(chothaArray);

// -----use destructuring assignment to pass an object as a function's parameters----
console.log("---use destructuring assignment to pass an object as a function's parameters---");

const stats = {
  max: 99,
  avg: 49.5,
  min: 70
}
// function halfStats(stat) {
//   return (stat.max+stat.min)/2.0;
// }

//  or

function halfStats({ max, min }) {
  return (max + min) / 2.0;
}

const adhaStat = halfStats(stats);
console.log(adhaStat);

// ----template literal-----
console.log("---template literal---");

const Profile = {
  name: "XenonSingh",
  age: 19
}

// template literal with multiline and string interpretation..

const greetings = `Whoa! is this ${Profile.name}! Sir autograph pls 👷‍♂️ and his age is ${Profile.age},`;

console.log(greetings);

//---- result list ---
console.log("---- result list ---");
const result = {
  success: ["bacho padho likho", "well done", "ez hai kya"],
  failure: ["beta padh le", "lodu", "noob hai kya"],
  skipped: ["waha betichod!", "next time abh"]
};

function makeList(obj) {
  const resultDisplay = [];
  for (let i = 0; i < obj.length; i++) {
    resultDisplay.push(`<li class="text-warning">${obj[i]}<li/>`);
  }
  return resultDisplay;
};
const success = makeList(result.success);
const skipped = makeList(result.skipped);

console.log(success);
console.log(skipped);

//----simple fields----

// function which just enter name age gender you will get in object
console.log("----simple fields----");
/* function info(name,age,gender) {
  return {
    Name:name,
    Age:age,
    Gender:gender
  }
};*/

// OR
const info = (name, age, gender) => ({ name, age, gender });
// it will work only if object prop is similiar as info params

console.log(info("xenon", 19, "male"));

// ------write concise declaraticve funtions------

console.log("---write concise declaraticve funtions----");

const bicycle = {
  gear: 2,
  /* setgear:
  function setgear(newgear) {
   this.gear=newgear;
  }
  */
  setgear(newgear) {
    this.gear = newgear;
  }
}

bicycle.setgear(3);
console.log(bicycle.gear);

//-----use class syntax to define a constructor functions-----
console.log("---use class syntax to define a constructor functions---");

// var spaceShuttle=function(targetPlanet){
//   this.Planet=targetPlanet;
// };

//or by class function

class spaceShuttle {
  constructor(targetPlanet) {
    this.Planet = targetPlanet;
  }
};
var zeus = new spaceShuttle("jupitor");

console.log(zeus.Planet);

// ----practice class----
console.log("----practice class----");

function makeListt() {
  class hello {
    constructor(name) {
      this.vegiName = name;
    }
  }
  return hello;
}

const vegetable=makeListt();
const carrot=new vegetable("carrot");
console.log(makeListt());
console.log(carrot.vegiName);

// so finally it is done 

// DONE WITH BASIC JAVASCRIPT IN ONE CODE FILE 
// BY harshneet singh with the help of free code camp.