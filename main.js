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
    canvas.mouseReleased(classifyCanvas);
    synth=speechSynthesis;
}
function preload() {
    classifier=ml5.imageClassifier('DoodleNet');
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function clearCanvas() {
    background("white");
}

function classifyCanvas() {
    classifier.classify(canvas,GotResults);
}

function GotResults(error,results) {
    if(error){
        console.error(error);
    }
        console.log(results);
        document.getElementById("label").innerHTML='label:'+results[0].label;
        document.getElementById("confidence").innerHTML='confidence:'+Math.round(results[0].confidence*100)+'%';
        utterThis=new SpeechSynthesisUtterance(results[0].label);
       speak.synth(utterThis);
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