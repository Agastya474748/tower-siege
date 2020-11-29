
const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
const Constraint = Matter.Constraint
var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10
var platform
var ball
var gameState = "onSling"
var slingshot
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
  }
  ball=  Bodies.polygon(100,100,6,2,options)
  World.add(world,ball)
  box1 = new Box (300,300,25,25)
  box2 = new Box (325,300,25,25)
  box3 = new Box (350,300,25,25)
  box4 = new Box (275,300,25,25)
  box5 = new Box (305,275,25,25)
  box6 = new Box (315,275,25,25)
  box7 = new Box (325,275,25,25)
  box8 = new Box (310,250,25,25)
  box9 = new Box (320,250,25,25)
  box10 = new Box (315,225,25,25)
  platform = new Ground(300,325,300,10)

  // create a sling object from SlingShot class and pass the ball.body and ,{x:645,y:145} as parameter
  slingshot = new SlingShot(ball,{x:200,y:100}); 

}

function draw() {
  background(255);  
  Engine.update(engine);
  box1.display();
  box4.display();  box5.display();
  box3.display();  box6.display();  box9.display(); 
  box2.display();  box7.display();  box8.display();  box10.display();
  platform.display();
  slingshot.display()
  fill("blue")
  polygon(ball.position.x,ball.position.y,2,6)
    drawSprites();
}
function mouseDragged(){
  if(gameState!=="launch"){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}
}


function mouseReleased(){
  slingshot.fly()
  gameState = "launch"
}

function keyPressed(){
  if(keyCode === 32){
   gameState = "onSling"
  }
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}