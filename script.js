const arrows = {
    up: '<div class="key" id="up" ondbclick="terminal.removeChild(this)">&uarr;</div><!---->',
    down: '<div class= "key" id="down">&darr;</div><!---->',
    left: '<div class="key" id="left">&larr;</div><!---->',
    right: '<div class="key" id="right">&rarr;</div><!---->',
};

let terminal = document.getElementById("terminal");
let turtle = document.getElementById("turtle");
const boxWidth = parseFloat(window.getComputedStyle(document.getElementById("display")).width);
const turtleWidth = boxWidth / 10;
// width is same as its height

function Reset() {
    terminal.innerHTML = "";
    turtle.style.left = `0px`;
    turtle.style.bottom = `0px`;
}

function clickKey(keyIndex) {
    terminal.innerHTML += arrows[Object.keys(arrows)[keyIndex]];
}

function Run() {
    let elements = terminal.innerHTML.split("<!---->");
    elements = elements.slice(0, elements.length - 1);

    let new_x_cord = 0;
    let new_y_cord = 0;

    elements.forEach(function (ele) {
        let x = parseFloat(window.getComputedStyle(turtle).left);
        let y = parseFloat(window.getComputedStyle(turtle).bottom);

        new_x_cord += (ele.includes("left")) ? x - turtleWidth : (ele.includes("right")) ? x + turtleWidth : 0;
        new_y_cord += (ele.includes("up")) ? y + turtleWidth : (ele.includes("down")) ? y - turtleWidth : 0;


        new_x_cord = (new_x_cord < 0) ? 0 : (new_x_cord < boxWidth - turtleWidth) ? new_x_cord : boxWidth - turtleWidth;
        new_y_cord = (new_y_cord < 0) ? 0 : (new_y_cord < boxWidth - turtleWidth) ? new_y_cord : boxWidth - turtleWidth;

    });

    turtle.style.left = `${new_x_cord}px`;
    turtle.style.bottom = `${new_y_cord}px`;
}
