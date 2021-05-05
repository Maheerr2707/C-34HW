const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var boxes=[]

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 600, 1400, 20);

  hero = new Hero(300,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1300,550,300);

for(var i=0; i<6; i++){
  boxes.push(new Box(500, 100, 70, 70))
}

for(var i=0; i<6; i++){
  boxes.push(new Box(700, 100, 70, 70))
}

for(var i=0; i<6; i++){
  boxes.push(new Box(900, 100, 70, 70))
}

for(var i=0; i<6; i++){
  boxes.push(new Box(1100, 100, 70, 70))
}
 }

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

for(var i=0; i<boxes.length; i++){
 boxes[i].display()
}

  hero.display();
  rope.display();
  monster.display();

}
