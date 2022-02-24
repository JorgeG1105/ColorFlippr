//Random Hexadecimal value
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

//vars that hold the hexColor class and set the hexadecimal color
let span = document.querySelector(".hexColor");
let hexColor = random_hex_color_code();

document.body.style.backgroundColor = hexColor;
span.innerHTML = hexColor;


//Button Logic for Hex
let btn = document.querySelector(".btn").addEventListener("click", () => {
    hexColor = random_hex_color_code();
    span.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
});

