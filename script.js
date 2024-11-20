// Variables
var fontSize = 25;
    fontStyle = "Courier"
    fontColor = '#0f0';
var mx = 0, 
    my = 0;

var colors = ["#f00", "#0f0", "#00f"];
colors = ["#0f0"];

// Initializing Canvas
var canvas = document.getElementById('mainCanvas'),
    cvs = canvas.getContext('2d');
    canvas.width = 0;
    canvas.height = 0;

// Functions
function loadCanvasVars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cvs.font = `${fontSize.toString() + "px"} ${fontStyle}`;

    // Set Canvas To Black
    cvs.fillStyle = "rgb(0, 0, 0)";
    cvs.fillRect(0, 0, canvas.width, canvas.height);
}

function trackMouse(event) {
    mx = event.pageX;
    my = event.pageY;
    document.getElementById("nums").innerHTML = mx.toString() + ", " + my.toString();
}

function randColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

loadCanvasVars();
addEventListener("resize", loadCanvasVars);
//addEventListener("mousemove", trackMouse, false);