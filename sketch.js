const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,ground,ball,canvas
function setup() {
  canvas = createCanvas(400,400);
  engine = Engine.create()
  world = engine.world
var ground_options = {
  isStatic:true
}
var ball_options = {
  restitution:1.0,
friction:0.8
}
  ground = Bodies.rectangle(200,390,200,50,ground_options)
ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
  World.add(world,ground)
 // console.log(object)
}

function draw() {
  background(0,255,255);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50) 
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)


}