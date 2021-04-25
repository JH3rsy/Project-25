
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,dustbinObjImg,groundObject	
var trashObj, trashObjImg
var world;

function preload()
{
	trashObjImg = loadImage("paper.png")
	dustbinObj = loadImage("trashcan.png")
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();


		trashObj = createSprite(1200,200,20,20);
		trashObj.addImage(trashObjImg)
		trashObj.scale = 0.5
	
		dustbinObj = createSprite(1200,100,20,20);
		dustbinObj.addImage(dustbinObj)



	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  trashObj.display();
}

