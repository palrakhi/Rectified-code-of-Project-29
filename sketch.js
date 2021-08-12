
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  polygon, sling1, groundObject;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    

    polygon = new Polygon(200,50);

    
    slingshot = new SlingShot(polygon.body,{x:200, y:50});

    groundObject = new ground(width/2,600,width,20);
}

function draw(){
    background(0)
    Engine.update(engine);
    groundObject.display()
    strokeWeight(4);
    
    polygon.display();

    slingshot.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
