var cam
var videoOff
var num=0
function setup() {
noCanvas()
  cam=createCapture(VIDEO)
  videoOff=createButton("video")
  videoOff.mousePressed(hi)
}

function draw() {
  background(220);
  cam.size(400,400)
  cam.x=0
  cam.y=0
}
function hi()
{
    num++
    if(num%1===0)
    {
        cam.hide()
    }
    if(num%2===0)
    {
        cam.show()
    }
}