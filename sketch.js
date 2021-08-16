
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	stoneObj=loadImage("images/stone.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1050,200,30);
	mango3=new Mango(1200,150,30);
	mango4=new Mango(1150,250,30);
	mango5=new Mango(1070,50,30);
	mango6=new Mango(900,200,30);
	mango7=new Mango(950,175,30);
	mango8=new Mango(1000,200,30);
	mango9=new Mango(1000,200,30);

	treeObj=new tree(1050,580); 
	groundObject=new ground(width/2,600,width,20);

	var launcherObject;
	var launchForce = 100;
	
	
	Engine.run(engine);

}

function mouseDragged(){
	//function mouseDragged(){
		if (gameState!=="launched"){
			Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
		}
	}

function mouseReleased(){
		launcherObject.fly();
		gameState = "launched";
}

function draw() {
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  image(stoneObj, 175, 340, 200, 300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stoneObj.display();
  stoneObj.scale = 0.5;
  groundObject.display();

  launcherObject = new launcher(stoneObj.body,{x:235,y:420});
}
