

var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin;


function preload(){
	dustbin = loadImage("dustbin.png");
	paper = loadImage("paper.png");
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");


	engine = Engine.create();
	world = engine.world;
	

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	

	paper = new Paper(100, 100,60);
    dustbin = new Dustbin(500,650);
	
	
	
	Engine.run(engine);
  
}


function draw() {
	background("white");
 
 

  rectMode(CENTER);
 
   
  paper.display();
  
  dustbin.display();
  
	drawSprites();
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
  
	}
}



