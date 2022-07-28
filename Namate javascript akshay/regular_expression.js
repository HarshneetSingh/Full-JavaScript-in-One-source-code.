// ? A regular expression is a pattern of characters.
// ? The pattern is used to do pattern-matching "search-and-replace" functions on text.

/* like for example theres a string like
 "hello world my name is harshneetSingh and my number is 7678236575 and 
 my dad number is 9891264632 and my monther number is 9911612617 
 us number              
 
 (123)232-1234         
 123-568-9281        
 311.131.0922            

 \(?\d{3}[-.)]\d{3}[-.]\d{4} will give the number

* here [-] plays an important role..........................[] is known as character class and - and ^ is special character in character class

? if [-.] dash starting from the start in [] then it will count as literal character 
? else
? it will count as function something like [a-z]=> this will word or char which is in between a-z

? [0-7] will give the number digits which are in between 0-7 only  

? [0-5]{3} will show the phone number which are in between 0-5 of there first 3 digit 
 
 
here the word for ex= name is literal
 * so here we have to find the numbers only 
    what we will do is 

 * with the help of meta characters we can find it 

    * /d = denotes the number 0-9 
        \d{10}== will give me the 10 digit word
        if we do \d\d\d\d\d\d\d\d\d

        we will get our numbers FROM the above string 

        if we do \w\w\w

        we will get the words which have more than 3 letters in the word 
in regular expressions

    . means any character in the string ,EVERTHING EXCEPT NEW LINE/N

    * means 0 or more

    let string = "hello world my name name name is harshneetSingh"

     using  name.*
    will bring all the name from the string  

    *single character


    .	Find a single cnewline excep haracter or line terminator         EVERTHING
    \w	Find a word character                                              0-9 A-Z a-z
    \W	Find a non-word character                                          SPACES AND ALL OTHER CHARACTERS EXCEPT 0-9 A-Z a-z
    \d	Find a digit        character                                      0-9
    \D	Find a non-digit character                                         SPACES PLUS CHARACTERS .NO NEWLINE
    \s	Find a whitespace character                                          
    \S	Find a non-whitespace character

    *quantifiers


    how many times a character do you want

    * ->0 or more
    + ->1 or more
    ?-> 0 or 1 
    {min,max}
    {n}

    now for example 
    string="hello i play valorant valo is one of the best i would say valo got to many player in it "

    now if you use regural expression in (   valor?a?n?t?   )
    it would give valo and valorant both these words from the string
    as (?) indicates whether the letter is in the word or not .both will    give valo and valorant

    *position

    ^ -> beginning of a line
    $->end of a line
    \b bound boundary


    ^\w==will give first character from the beginning of the line
    ^\w+==will give first word from the beginning of the line


    \w$==will give first CHARACTERS from the beginning of the line
    \w+$==will give first WORD from the beginning of the line

    *TO FIND A SINGLE WORD IN A LINE YOU CAN DO
    ^\W+$
    *TO FIND A SINGLE CHAR IN A LINE YOU CAN DO
    ^\W$

    *to find a bounded word 
    string = hello my name is harshneet singh 

    1case = [  \w  ]== will give first every word
    2case = [  \b\w+  ]== will give you every word word from the string as it is saying ki a word which has no bound boundry in starting
                        and a word which has 1 or more charac

    3case = [  \b\w\b  ] == will give you only one single character which has boundry from both the sides

    3case = [  \b\w+\b  ] == will give you  a word which has boundry from both the sides

    4case = [   \b\w{2,4}\b    ]== will give you only those word which is of 2 3 and 4 character

*/

/*
 * example: harshneets50@gmail.com
 *          harshi.singh@gmail.in
 *          harshi@sdnsd.org
 *
 * answer: [\w.]+@\w+.(com|in|org)
 */

/*
 ? CAPTTURING GROUP


 *EXAMPLE 1
 (123)232-1234         123-XXX-XXXX           **** WE JUST REPLACED IT BY CAPTTURING GROUPING METHOD
 123-568-9281          123-XXX-XXXX           FOR EXAMPLE TAKE =>  311.131.0922  THIS NUMBER IS WHOLE GROUP    (WHICH CAN BE ACCESS WITH $0)  
 311.131.0922          311-XXX-XXXX"          IF YOU ADD () IN REGURAL EXPRESSION THEN IT WILL TAKE AS A GROUP AND WILL ASSIGN $1 AND SO ON           
                                              ?\(?(\d{3})[-.)]\d{3}[-.]\d{4}  
 

*EXAMPLE 2

 kanjwani, SINGH. HARSHNEET                HARSHNEET SINGH kanjwani 
   kanjwani, SINGH. HARSHNE                HARSHNE SINGH kanjwani
   kanjwani, KAUR.  KHUSHIT                KHUSHIT KAUR kanjwani  
  
   
   * regural expression
   ?   in search section => (\w{8}),\s+(\w{4,5}).\s+(\w+) 
  ?   in replace section =>  $3 $2 $1


  *example 3


 1 [google](www.google.com)          =>      <a href="www.google.com">google</a>  
  
 2 [instagram](www.instagram.com)    =>     <a href="www.instagram.com">instagram</a> 
  
 3 [facebook](www.facebook.com)      =>     <a href="www.facebook.com">facebook</a> 

?  in searchh    \[(\w+)\]\((\w+.\w+.\w+)\)
            or
? in search     \[(.*?\)]\((www.*\))
? replace     <a href="$2">$1</a>


*    \[.*?\]
   .* is very greedy in array bracket if we just add 1 class character bracket it will give whole line 

   1 array bracket
   to remove his greedy ness we just have to add ? in it .
*/

/*
 ?back reference

 formula => use bracket which you have to check 
 string = hello my name is is hars hars 

 \b(\w+)\s\1\b will give is is and hars hars
 */

// ********************************test()********************************

const s = "12avs3";
const r = /\d{3}/;
// *checking for hello string
// if s ="hello" r = \b\w{4}\b result =false
// if s ="hello" r = \b\w{5}\b result =true
// if s ="hello" r = \w{3} result =true
// if s ="hello" r = \w{6} result =false

// *checking for number  string

// if s ="12avs3" r = \d{3} result =false
// if s ="123avs" r = \d{3} result =true            // it is resulting true as 3 digits are continues
// if s ="123avs" r = \b\d{3}\b result =false
// if s ="123" r = \b\d{3}\b result =true

console.log(r.test(s));

// ********************************match()********************************

const string = "hello my name is harshneet singh";
let regexp = /hello/;

console.log(regexp.test(string)); // it will return true

console.log(string.match(regexp)); // it will return string itself in array

// now if regex ==\w
regexp = /\w/;
console.log(string.match(regexp)); // it will return only single charac of the first word

// now if regex ==\w+

regexp = /\w+/; // ? or regex = /[a-z]+/;

console.log(string.match(regexp)); // it will return only single word of the string

// use of flag g .... it will give whole line in the form of array element in array   GLOBAL

regexp = /\w+/g;

console.log(string.match(regexp)); //*[ 'hello', 'my', 'name', 'is', 'harshneet', 'singh' ]

// *it will return  single single  word of the string

// *NOW LETS SAY IF THERES capitalization in a string for example

// use of flag i .... it will give whole line in the form of array element in array whether theres capital letter present or not   GLOBAL

const string2 = "Hello, my Name is harshneet singh";

regexp = /[A-Z]+/gi;

console.log(string2.match(regexp)); //*[ 'Hello', 'my', 'Name', 'is', 'harshneet', 'singh' ]

// ? important    in case of regexp=/\w+/g; it will return [ 'Hello', 'my', 'Name', 'is', 'harshneet', 'singh' ]

// ? important    in case of regexp=/[A-z]+/g; it will return [ 'Hello', 'my', 'Name', 'is', 'harshneet', 'singh' ]

// *  using of group

// this is normal regex for finfing the number

const string3 = "112-134-4322 123.242.1213 999.242.1213"; // main string

regexp = /\d{3}[-.]\d{3}[-.]\d{4}/g;

console.log(string3.match(regexp));

// ? now to get group we can only do that with removing g from the regex as group can be foung in one number only

regexp = /(\d{3})[-.]\d{3}[-.]\d{4}/;

console.log(string3.match(regexp));

// *********heres the exec() comes********

//  The exec() method tests for a match in a string.

// If it finds a match, it returns a result array, otherwise it returns null.

regexp = /(\d{3})[-.]\d{3}[-.]\d{4}/g;

// console.log(regexp.exec(string3))

// it helps to return the group of the regex to get every group of an every element og the matched string
// *use loop
let result = regexp.exec(string3);
while (result !== null) {
  console.log(result);
  result = regexp.exec(string3);
}

// ?or you can do it by truthy falsy thingy

// let result;
// while(result=regexp.exec(string3)) {
//    console.log(result)
// }

//********************************SPLIT()****************************

// const string2="Hello my Name is harshneet singh"

let splitstr = string2.split(/[,\s]+/);
console.log(splitstr);

splitstr = string2.split(/(\W)/);
console.log(splitstr);
// important TO CONSOLE

// ********************REPLACE()****************************

// THIS FUNCTION JUST takes the input in the form og regex and replace it .
console.log("*****THIS FUNCTION JUST takes the input in the form og regex and replace it . ****")

let str = "hello world myFunction";

console.log(str.replace(/\w{5}/, "nooo")); // nooo world myFunction
console.log(str); //hello world myFunction"

// * here in replace one imp thing is that if you wanna replace many things then you gotta use g (global)
console.log("***** here in replace one imp thing is that if you wanna replace many things then you gotta use g (global)****")

console.log(str.replace(/\w{5}/g, "nooo")); //nooo nooo nooonooo

// now we are just going to double the vowels in the str
console.log("***** now we are just going to double the vowels in the str****")

console.log(str.replace(/([aeiou])/g, "$1$1")); // heelloo woorld myFuunctiioon


// ***** replace with function name ****

console.log("***** replace with function name ****")
let newStr =str.replace(/([aeiou])/g,(item)=>{
   return item.toLocaleUpperCase()
})
console.log(newStr)


//  to access the regex capturing group in the replace function 
str = "111.222-2341 000.213-1312";
// here item = group[0] 
const newNUMBER =str.replace(/\b(\d{3})[.-](\d{3})[.-](\d{4})\b/g,(item,captureGrp1,captureGrp2,captureGrp3)=>{
   return `${captureGrp1}-xxx-xxxx`
})
console.log(newNUMBER)


// example practice 

const newSTRING ="hello my name is  harshneet and whatsapp."

const wanna=newSTRING.split(/[\s.]+/).filter(splitedItem=> splitedItem.length); // if theres a length in the xthen itll return 
console.log(wanna)