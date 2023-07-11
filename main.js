console.log("random_number is set to;")

var random_number = Math.random();

function updateLabel() {
    document.getElementById("label").innerHTML
}

var timer_counter= 0;
var timer_check= timerValue;
var drawn_sketch=0;
var answer_holder= checkSketch();
var score= 0;


function setup() {
    canvas = createCanvas(280, 280);
    canvas.center(); 
    background("white");
}

function clearCanvas() {
    background("white");
}

function checkSketch() {
    
    if(timer_counter>400) 
    {
      timer_counter = counter++;
      timer_check = "completed";
    }

    if(timer_check=completed) 
    {
        timer_check=0
        updateCanvas()
    }
}