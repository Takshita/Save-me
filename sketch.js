const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  

   
    log1 = new Log(810,260,300, 300);

  
    bird = new Bird(100,100);


    slingshot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
  
    ground.display();
   
    log1.display();

 

 

    bird.display();
    
  
    slingshot.display();    
}
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
slingshot.fly();

}