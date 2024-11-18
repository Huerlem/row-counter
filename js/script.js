//document.getElementById('count-el').innerText = 5
// const firstBatch = 5
// const secondBatch = 7

// const count = firstBatch + secondBatch


// console.log(count)

/*
//1. Create a variable, myAge, and set its value to your age
//2. Log the myAge variable to the console
const myAge = 36;

console.log(myAge)
*/

/*
//1. Create two variables, myAge and humanDogRatio
//2. Multiply the tow together and store the result in myDogAge
//3. Log myDogAge to the console
const myAge = 36
const humanDogRatio = 7

function myDogAge() {
    
    const myDogAge = myAge * humanDogRatio

    return myDogAge

};
console.log(myDogAge());


//1. Create a variable, bonusPoints, Initialize it as 50. Increise it to 100.
//2. Decrease it down to 25, and then finally increase it to 70
//3. Console.log the value after each step
let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints);


let count = 5


console.log(count);
*/


//initialize the count as 0
//listen for  clicks on the increment button
//increment the count variable when the button is clicked (log it out)
//change the count-el in the HTML to reflect the new count
//1. Grab the save-el paragraph and store it in a variable called saveEl
var countEl = document.getElementById('count-el');//pass in argument
var saveEl = document.getElementById('save-el');
var count = 0;

function increment() {
    
    //Change this to use the pluss equal technique you've learned
    //count = count + 1;
    count += 1;
    countEl.innerText = count
    console.log(count)

};
//console.log(increment())

//rest function
function reset() {

    count = 0;
    countEl.innerText = count;
    
}

//1. Create a function, save(), wich logs out the count when it's called

function save() {
    //2. Create a variable that contains both the count and the dash separate, i.e. "12 -"
    //3. Render the variavble in the saveEl using innertext
    //NB: Make sure to not delete the existing content of the paragraph
    var counted = count
    var dash = ' - '
    //I changed from innerText to textContent to make the space after dash '-' work on the web
    saveEl.textContent += counted + dash
    console.log(count)
    reset();
}

//Google:
//innerText alternative mdn