
// Step#1
var buttontestElement = document.getElementById("buttontest");
var autorstitlesElement = document.getElementById("autorstitles");

buttontestElement.addEventListener("mouseover", onMouseOverButtontest);
buttontestElement.addEventListener("mouseout", onMouseOutButtontest);

autorstitlesElement.addEventListener("mouseover", onMouseOverAutorstitles);
autorstitlesElement.addEventListener("mouseout", onMouseOutAutorstitles);

function onMouseOverButtontest() {  
    buttontestElement.style.color = "blue"; 
}

function onMouseOutButtontest() {
    buttontestElement.style.color = "";
}

function onMouseOverAutorstitles() {  
    autorstitlesElement.style.color = "green"; 
}

function onMouseOutAutorstitles() {
    autorstitlesElement.style.color = "";
}

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
let otheritem = document.getElementById("buttontest");

// Add event listener to the button
thebutton.addEventListener("click", onButtonClick);

// Event listener function
function onButtonClick() {
    otheritem.style.color = "red";
}



// This is the text entry step#3

let textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);

function onChange() {
    let newtext = textentry.value;
    otheritem.innerHTML = newtext;
}
