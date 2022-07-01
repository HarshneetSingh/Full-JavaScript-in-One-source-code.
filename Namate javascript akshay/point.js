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
// const result = people.reduce((groupedPeople, person) => {
//     const age = person.age;

//     if (groupedPeople[age] == null)
//         groupedPeople[age] = []
//     groupedPeople[age].push(person.name)


//     return 
// }, {})
// console.log(result)
//     if(groupedPeople[age]== null)
//    }

const users = [
    { fN: "harshneet", lN: "singh", age: 19 },
    { fN: "Web", lN: "singh", age: 35 },
    { fN: "Xenon", lN: "singh", age: 19 }
]

const samAge = users.reduce(function (acc, curr) {
    if (acc[curr.age] == null) {

        acc[curr.age] = 1;
    }
    else {
        acc[curr.age] +=1;
    }
    return acc
}, {})
console.log(samAge);

function hell(users) {
    let count={};
    for (let i = 0; i < users.length; i++) {
        
        if(users[i].age  ==null ){
            count= users[i].age=1;
        }
        else{
            count.push(users[i].age+=2);
        }
    }
    return count
}
console.log(hell(users))