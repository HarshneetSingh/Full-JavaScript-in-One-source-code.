// const ageArr = [19, 2,19];
// function countAge(arr) {
//     let count = 0;
//     for (let index = 0; index < arr.length; index++) {
//         for (let i = index + 1; i < arr.length; i++) {

//             if(arr[index]!=arr[index])
//             if (arr[index] === arr[i]) {
//                 count++;
//             }

//         }
//         console.log(arr[index] + "=" + count);
//     }
// }

// countAge(ageArr)

// const items = [
//     {
//         price: 10
//     },
//     {
//         price: 10
//     },
//     {
//         price: 10
//     },
//     {
//         price: 10
//     },
//     {
//         price: 10
//     }

// ]
// let ttl = 0;
// items.forEach(x => {
//     console.log("hello")
//     ttl += x.price;
//     return ttl;
// })

// console.log(ttl)



const people = [
    { name: 'Kyle', age: 26 },
    { name: 'John', age: 31 },
    { name: 'Sally', age: 42 },
    { name: 'Jill', age: 42 }
]
const result = people.reduce((groupedPeople, person) => {
    const age = person.age;

    if (groupedPeople[age] == null)
        groupedPeople[age] = []
    groupedPeople[age].push(person.name)


    return groupedPeople
}, {})
console.log(result)





const users = [
   { fN: "harshneet", lN: "singh", 'age': 19 },
    { fN: "Web", lN: "singh", 'age': 35 },
    { fN: "Xenon", lN: "singh", 'age': 19 }
]

const sameAge = users.reduce(function (acc, curr) {
    if (acc[curr.age] == null) {

        acc[curr.age] = 1;
    }
    else {
        acc[curr.age] ++;
        acc[curr.age]+=1;
    }
    return acc
}, {})
console.log(sameAge);




function hell(users) {
    let count={};
    for (let i = 0; i < users.length; i++) {
        if(count[users[i].age] ==null ){
            count[users[i].age] =1
        }
        else{
            count[users[i].age] ++

        }
    }
    return count
}
console.log(hell(users))









// This example groups objects based on a property value using the JavaScript array reduce method.


let student = [

  { name: 'David', age: 23, hobby: 'fishing' },

  { name: 'Rachel', age: 25, hobby: 'cooking' },

  { name: 'Rahul', age: 22, hobby: 'fishing' }

];

function seperateByHobbies(object) {
    return object.reduce(function (acc,curr){
        let hobby=curr.hobby;
        if (acc[hobby]==null ){
            acc[hobby]=[]
            acc[hobby].push(curr)
        
        } else {
            acc[hobby].push(curr)
            
        }
        return acc;
    },{})
    
}

console.log(seperateByHobbies(student))






// this function shows a duplicacy of an number only with filter and some 

// if you want to print the number then use filter or if you want true or false then you an go for .some
// we cant do -1 in accessing the normal array like num[-1]
// const num = [1, 2, 3, 2, 4, 5, 5, 6];
// console.log(num[1])

const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const isDuplicate = numbers.filter((item, index) => 
{
    const filter= index != numbers.indexOf(item)
/*
    0       0
    1       1    
    2       2
    3       1 here 1 , bcz 2 is reppeating in the number array and indexof take the first element which gonna repeated so it printed 1
    4       4
    5       5
    6       5
    7       7
*/
        return filter; 
    }
).reduce((acc,curr,index,arr)=>{
    if (arr===filter) {
        
    }
});
console.log(isDuplicate);

// function countNum(isDuplicateARR,) {
    
// }

