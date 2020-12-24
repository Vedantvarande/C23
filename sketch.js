const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world, box,ball;

var box1,box2,ground1;

function setup()
 {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  ground1 = new Ground(200,390,400,20);

  /*var b=
  {
    restitution:0.8
  }
  //ball = Bodies.circle(200,100,20,b);
  //World.add(world,ball);

   var a= 
   {
     isStatic:true
   }*/

  //box=Bodies.rectangle(200,390,200,20,a);
  //World.add(world,box);
  //console.log(box.position.x);

 }

function draw() 
{
  background("green");
  Engine.update(engine);  
  //rectMode(CENTER);
 //rect(200,200,50,50);
 box1.display();
 box2.display();
 ground1.display();
 //rect(box.position.x,box.position.y,400,30);
 //ellipseMode(RADIUS);
 //ellipse(ball.position.x,ball.position.y,20,20);
  //drawSprites();
}