//Initiating an Array with set colors
let colors = ["red", "blue", "#9ef502", "rgba(245, 40, 145, 0.8)"];

//Selecting the Span Tag
let span = document.querySelector(".hexColor");

//generating a random color from the list of colors
let setColor = colors[Math.floor(Math.random() * colors.length)];

//setting the span to match what ever the color that setColor has stored.
span.innerHTML = setColor;

//Changing the body background color to whatever setColor has stored
document.body.style.backgroundColor = setColor;

//Button logic to run the changeColor function everytime it is clicked.
let btn = document.querySelector(".btn").addEventListener("click", () => {
    changeColor();
});

//ChangeColor logic in which it selects a random item from the array of colors and set the span and background
//color to the color randomly selected.
let changeColor = () => {
    setColor = colors[Math.floor(Math.random() * colors.length)];
    span.innerHTML = setColor;
    document.body.style.backgroundColor = setColor;
}
