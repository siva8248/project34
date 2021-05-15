const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg1,gd1,gd2,h1,m1,sl;
var obj1 = [];
var obj2 = [];
var obj3 = [];
var obj4 = [];

function preload() {
  bg1 = loadImage("bg.png");
}

function setup() {
  createCanvas(1360,690);
  engine = Engine.create();
  world = engine.world;
  gd1 = new gud(675,680,1400,5);
  gd2 = new gud(580,450,900,8);
  h1 = new SH(200,400,250,150);
  m1 = new mn(950,400,150,150);
  sl = new rope(h1.body,{x:200,y:250});
for (var j =0; j <=430; j=j+45){
    obj1.push(new obj(400,j,40,40));
  }
for (var j =250; j <=450; j=j+45){
  obj2.push(new obj(500,j,40,40));
  }
for (var j =110; j <=450; j=j+45){
    obj3.push(new obj(600,j,40,40));
  }
for (var j =300; j <=450; j=j+45){
    obj3.push(new obj(700,j,40,40));
  }
}

function draw() {
  background(bg1);
  Engine.update(engine);
  gd1.display();
  gd2.display();
  h1.display();
  m1.display();
  for (var i = 0; i < obj1.length; i++) {
    obj1[i].display();
  }
  for (var i = 0; i < obj2.length; i++) {
    obj2[i].display();
  }
  for (var i = 0; i < obj3.length; i++) {
    obj3[i].display();
  }
  for (var i = 0; i < obj4.length; i++) {
    obj4[i].display();
  }
}
function mouseDragged(){
  Matter.Body.setPosition(h1.body, {x: mouseX , y: mouseY});
}
function keyPressed(){
  if(keyCode===32)
  sl.attach(h1.body);
}
function mouseReleased(){
  sl.fly();
}