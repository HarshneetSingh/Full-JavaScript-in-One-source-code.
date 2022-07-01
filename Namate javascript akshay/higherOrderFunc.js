// higher order function is the function which takes a callback function as a argument or a function which return another function.
// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

const radius=[2,8,3,4];


// const calculateArea0=function (radius) {
//     const radiusArea=[];
//     for (let index = 0; index < radius.length; index++) {
        
//         radiusArea.push(Math.PI *radius[index]*radius[index]);
//     }
    
//     console.log(radiusArea);
// }
// calculateArea0(radius);
// const circumArea2=function (radius) {
//     const radiusArea=[];
//     for (let index = 0; index < radius.length; index++) {
        
//         radiusArea.push(2*Math.PI*radius[index]);
//     }
    
//     console.log(radiusArea);
// }
// circumArea2(radius);
// const diameterArea1=function (radius) {
//     const radiusArea=[];
//     for (let index = 0; index < radius.length; index++) {
        
//         radiusArea.push(2*radius[index]);
//     }
    
//     console.log(radiusArea);
// }
// diameterArea1(radius);


                                // logic bolte

const circleArea=(radius)=> Math.PI *radius*radius;
const radiusCircumFrence=(radius)=>2*Math.PI*radius;
const radiusDiameter=(radius)=>2*radius;

const calculateArea=function (radius,LOGIC) {
    const radiusArea=[];
    for (let index = 0; index < radius.length; index++) {
        
        radiusArea.push(LOGIC(radius[index]));
    }
    
    console.log(radiusArea);
}

console.log(radius.map(circleArea));
calculateArea(radius,circleArea);
calculateArea(radius,radiusCircumFrence);
calculateArea([1,1,1],radiusDiameter);


Array.prototype.calculate=function (LOGIC) {
    const radiusArea=[];
    for (let index = 0; this < radius.length; index++) {
        
        radiusArea.push(LOGIC(this[index]));
    }
    return radiusArea;
    // console.log(radiusArea);
}
console.log(radius.calculate(circleArea));
// this should work
