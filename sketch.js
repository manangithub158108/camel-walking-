function preload(){
  camelAnime = loadAnimation("camel1.png", "camel2.png", "camel3.png", "camel4.png", "camel5.png");
  backgroundImg = loadImage("background.png");
}

function setup() {
  createCanvas(1000,500);
  camel = createSprite(100, 400, 50, 50);
  camel.addAnimation("animation",camelAnime);
  camel.velocityX = 9;
}

function draw() {
  background(backgroundImg);  

  if(camel.x > 1000){
    camel.x = 0;
  }
  
  drawSprites();
}