
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new dustBin(750,250,1500,20);

	paper1 = new paper(50,210,25);

	dustBin1 = new dustBin(width/2,230,150,20);
	dustBin2 = new dustBin(835,215,20,50);
	dustBin3 = new dustBin(665,215,20,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


  ground.display();

  paper1.display();

  dustBin1.display();
  dustBin2.display();
  dustBin3.display();


	fill(255);
  text(mouseX +"," + mouseY,mouseX,mouseY);

  keyPressed();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5});

	}

}

