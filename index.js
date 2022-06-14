// let name = "Vlad";

// ES5 varianta veche de JS
// ES6 varianta mai noua

// Primitive data types
let stringVar = " asdlksdjfjkds ";
let numberVar = 0.2222;
let booleanVar = false;
let undefinedVar;
let nullVar = null;
// console.log(typeof stringVar);
// console.log(typeof numberVar);
// console.log(typeof booleanVar);
// console.log(typeof undefinedVar);

// let name = "Vlad";



// function testingVariables() {
//     let name = "Avram";
//     return name;
// }

// let returnedNameFromFunction = testingVariables();

// document.body.innerHTML =  returnedNameFromFunction;

// console.log(returnedNameFromFunction);
let weatherType = "sunny";

let whatToWear = (weatherCondition) => {
    let condition;
    if(weatherCondition === "raining") {
        let condition = "ia o geaca";
        return condition;
    } else if(weatherCondition === "sunny") {
        let condition = "ia ochelari de soare"
        return condition;
    } else {
        let condition = "nu stiu ce sa fac"
        return condition;
    }
}

document.body.innerHTML = whatToWear(weatherType);