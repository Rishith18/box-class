const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,box3,box4,box5;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(170,100,50,80);
    box3 = new Box(220,50,120,80);
    box4 = new Box(140,300,80,50);
    box5 = new Box(200,200,40,40);
    ground = new Ground(200,385,400,20);


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
   
}