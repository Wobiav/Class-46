const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Engine = Matter.Engine;




var ground;
var lander;
var lander_img;
var bg_img;
var ground2;
var asteroid, asteroidImage, asteroidGroup;


var vx = 0;
var g = 0.01;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  asteroidImage = loadImage("asteroid2.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);


  moonEngine = Engine.create();
  moonWorld = moonEngine.world;

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  ground = createSprite(width/2, height-50, width, 20);
  ground.debug = true;
 
  asteroidGroup = createGroup();

  //ground = new Ground(width/2, height-50, width, 20);
  
  ground2 = createSprite(910, 250, 90, 20);
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  Engine.update(moonEngine);
  image(bg_img,0,0);
  
  
  ground.visible = false;
  ground2.visible = false;
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();


  if(keyIsDown(UP_ARROW)){
    lander.y = lander.y-10;
  }

  if(keyIsDown(RIGHT_ARROW)){
    lander.x = lander.x+10;
  }
  
  if(keyIsDown(LEFT_ARROW)){
    lander.x = lander.x-10;
  }



  
  spawnAsteroids();

  if(lander.isTouching(asteroidGroup)){
    lander.destroy();
  }

  //fall down
  if(lander.collide(ground)){
    vy = 0
  }

  if(lander.collide(ground2)){
    vy = 0;
  }
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}

function spawnAsteroids(){
  if(frameCount%80 === 0){
  asteroid = createSprite(Math.round(random(0, width)), 5, 20, 20);
  asteroid.addImage(asteroidImage);
  asteroid.scale = 0.1;
  asteroid.velocityY = Math.round(random(2, 6));

  asteroid.lifetime = height/asteroid.velocityY


  asteroidGroup.add(asteroid);
  }
}
