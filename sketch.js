var fixedRectangle
var movingRectangle

function setup() {
  createCanvas(800,400);
fixedRectangle = createSprite(600,400,50,80);
movingRectangle= createSprite(400,200,80,30);
fixedRectangle.shapeColor = "blue"
movingRectangle.shapeColor="gray"
}

function draw() {
  background(255,255,255);
  movingRectangle.x=mouseX;
  movingRectangle.y=mouseY; 
  if(movingRectangle.x-fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 && 
    fixedRectangle.x - movingRectangle.x <movingRectangle.width/2 + fixedRectangle.width/2 && 
    movingRectangle.y - fixedRectangle.y < movingRectangle.height/2+fixedRectangle.height/2 &&
    fixedRectangle.y-movingRectangle.y< movingRectangle.height/2+fixedRectangle.height/2 ){
      fixedRectangle.shapeColor = "green"
      movingRectangle.shapeColor="green"
  }
  else{fixedRectangle.shapeColor = "black"
  movingRectangle.shapeColor="black"}
  drawSprites();

}