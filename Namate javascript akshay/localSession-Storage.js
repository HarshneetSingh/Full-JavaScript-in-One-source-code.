// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

// The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.
const student={
    firstname:"harshneet",
    age:30,

}

localStorage.setItem("student1",JSON.stringify(student))
console.log(localStorage.getItem("student1"))

console.log(JSON.parse(localStorage.getItem("student1")))


// local will stays untill you clear it 
// 10 mb max 

// session storage will discard as soon as window closes
// 5mb
// sessionStorage

// cookie is set manaully for discarding 8kb