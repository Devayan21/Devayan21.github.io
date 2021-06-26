var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
var isPainting = false;

function setColor(value){
	color=value;
}

function resizeBrush(value)
{
	radius=getElementById("sz").value;
}

function setWidth (value) {
 	if(!isNaN(value)) paintcanvas.width=value;
}

function setHeight (value) {
 	if(!isNaN(value)) paintcanvas.height=value;
}

function startPaint(){
  isPainting=true;
}

function endPaint(){
  isPainting=false;
}

function doPaint(x,y){
  if(isPainting == true) paintCircle(x,y);
}

function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
