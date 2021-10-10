function preload() {
 
bg = loadImage("snow1.jpg");
sf = loadImage("snow4.webp");

}


function setup() {
  createCanvas(800,400);

}

function draw() {
  background(bg);  
  snowfall()
  drawSprites();

}

function snowfall() {

  if(frameCount % 30 == 0){
    var r = Math.round(random(0, 800))
    snow = createSprite(r, 0, 20, 20);
    snow.addImage(sf);
    snow.velocityY=3;
    snow.lifeTime=200;
    snow.scale=0.1;

  }

}