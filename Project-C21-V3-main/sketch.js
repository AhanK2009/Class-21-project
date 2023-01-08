const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj,leftSide,rightSide;
var world;
var radius = 40;
var ball;

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
     }
	 ball=Bodies.circle(250,100,3,ball_options);
	 World.add(world,ball);
	 groundObj=new ground(width/2,670,width,20);
     leftSide=new ground(1100,600,30,100);
	 rightSide=new ground(1500,600,30,100);

	
     
	
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
  Matter.Body.applyForce(ball,ball.position,{x:90,y:-90});
  }
}