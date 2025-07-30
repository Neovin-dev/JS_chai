const body = document.getElementsByTagName("body")[0];
// why [0]?  // Because getElementsByTagName returns a NodeList, and we need the first element 
// we are using this body to change the background color of the page according to the buttom pressed.

const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const random = document.getElementById("random");

const setColor = (colourName) => {
    body.style.backgroundColor = colourName;
    // this will change the background color of the page to the color passed in the function
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
// this will generate a random color and change the background color of the page to that color