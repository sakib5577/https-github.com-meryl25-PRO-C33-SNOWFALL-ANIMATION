const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var bg,engine,world;

function preload(){
bg=loadImage("snow3.jpg");
}

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

}

function draw() {
  background(bg);  
  Engine.update(engine);
  drawSprites();
}