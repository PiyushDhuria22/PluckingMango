
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;
var launchForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  
  stoneObj=new stone(200,420);
	mango1=new mango(1000,100,30);
  mango2=new mango(1130,250,30);
  mango3=new mango(1150,170,30);
  mango4=new mango(1050,110,30);
  mango5=new mango(1080,190,30);
  mango6=new mango(900,220,30);
  mango7=new mango(990,200,30);
  launcherObject=new Launcher(stoneObj.body,{x:200,y:420})


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stoneObj.display();
  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);

  //launcherObject=new Launcher(stoneObj.body,{x:255,y:420});
}

function detectCollision(hitstone,hitmango){
	mangoBodyPosition = hitmango.body.position;
	stoneBodyPosition = hitstone.body.position;

	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= hitmango.r + hitstone.radius) {
		Matter.Body.setStatic(hitmango.body,false);
    console.log("fall")
}
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  launcherObject.fly();
  console.log("fly")
}
function keyPressed(){
if (keyCode===32){
  Matter.Body.setPosition(stoneObj.body,{x:200,y:420})
  launcherObject.attach(stoneObj.body);
}
}
