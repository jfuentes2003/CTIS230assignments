
//The on click function//
var firsttestElement = document.getElementById("firsttest");
var isBlue = false;

firsttestElement.addEventListener("click", onClick);

function onClick() {  
    if (isBlue) {
        firsttestElement.style.color = "";
    } else {
        firsttestElement.style.color = "blue";
    }
    isBlue = !isBlue; // Toggle the flag
}


//autorstitles id//
var autorstitlesElement = document.getElementById("autorstitles");

autorstitlesElement.addEventListener("mouseover", onMouseOverAutorstitles);
autorstitlesElement.addEventListener("mouseout", onMouseOutAutorstitles);

function onMouseOverAutorstitles() {  
    autorstitlesElement.style.color = "green"; 
}

function onMouseOutAutorstitles() {
    autorstitlesElement.style.color = "";
}
//testttt
var changecolorElement = document.getElementById("changecolor");




// Step#5 Optional
var colorChangeButton = document.getElementById("colorChangeButton");

colorChangeButton.addEventListener("click", onChangeBackgroundColor);
function onChangeBackgroundColor() {
    // Change the background color to a random color
    document.body.style.backgroundColor = getRandomColor();
}
function getRandomColor() {
    // Generate a random hex color code
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}


// Adding the buttoins that changes something in the website
// Step#2
// Get elements
let thebutton = document.getElementById("thebutton");
let otheritem = document.getElementById("firsttest");

// Add event listener to the button
thebutton.addEventListener("click", onButtonClick);

// Event listener function
function onButtonClick() {
    otheritem.style.color = "red";
}



// This is the text entry step (it changes the tile name)#3

let textentry = document.getElementById("myinput");
textentry.addEventListener("changecolor", onChange);

function onChange() {
    let newtext = textentry.value;
    otheritem.innerHTML = newtext;
}
