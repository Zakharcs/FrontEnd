
// ------------------- 5/18/2023 -----------------------------

// Arrays :

let scores = [99, 67, 59, 77, 100];
console.log(scores);
// get the first item in array
console.log(scores[0]); //99

// count how many elements in array
console.log("Item count: " + scores.length);

// Javascript object
let person1 = {
                firstName: "Elnara",
                lastName: "H",
                age: 18,
                company: {
                  companyName: "Apple",
                  location: "California",
                }
              };

console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.company.companyName);




 // ================== IF STATEMENT =============================

// if statements 

let num = 100; 

if (num > 70) {
    console.log('You have passed');
}


let num2 = 200; 

if (num2 > 100) {
    console.log('its greater than 100');
} else {
    console.log('its not greater than 100');
}


// if the num2 is greater than 150 -- super number 
// if it's between 100 - 150 -- cool number 
// else ok number 
if (num2 > 150) {
    console.log('super number');
}else if(num2 > 100){
    console.log('cool number');
} else {
    console.log('ok number');
}

let season = "Spring"; 

switch (season) {
    case "Spring":
        console.log('Go Hiking');
        break;
    case "Summer":
        console.log('Go Swimming');
        break;
    case "Fall":
        console.log('Go Biking');
        break;
    case "Winter":
        console.log('Go Skiing');
        break;
    default:
        console.log('BAD SEASON VALUE!!!');
        break;
}