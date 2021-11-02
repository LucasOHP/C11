var mar ,marI;
var barco ,barcoA;



function preload(){
  
  marI = loadImage("sea.png");
  barcoA = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  mar = createSprite(0,200,20,20);
  mar.addImage("mar",marI);
  mar.velocityX = -1;

  barco = createSprite(50,325,20,40);
  barco.addAnimation("barco",barcoA);
  barco.scale = 0.1;

}

function draw() {
  background("blue");
  
  if(mar.x < 0){
    mar.x = mar.width/2;
  }


  drawSprites();
}