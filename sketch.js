const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var man,manimg,back,backimg;
function preload()
{
manimg = loadImage("George.png");
backimg = loadImage("mybackground.jpg");
}

function setup() {
	createCanvas(800, 700);
background(0,0,0);

	engine = Engine.create();
	world = engine.world;
man = createSprite(350,400,20,20);
man.addImage("manimage",manimg);
back = createSprite(350,400,10,10);
back.addImage("backdrop",backimg);
back.scale("700");
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

drawSprites();
}
