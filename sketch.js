//Write your code here
const Engine = Matter.Engine;
const Composite = Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
    canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    ground = Bodies.rectangle(200, 590, 600, 20, { isStatic: true });
    rectangle1 = Bodies.rectangle(400, 300, 200, 20, { restitution: 0, isStatic: false });
    rectangle2 = Bodies.rectangle(400, 250, 200, 20, { restitution: 0, isStatic: false });
    rectangle3 = Bodies.rectangle(400, 200, 200, 20, { restitution: 0, isStatic: false });
    square = Bodies.rectangle(400, 150, 60, 60, { restitution: 0, isStatic: false });
    circle1 = Bodies.circle(200, 300, 35, { restitution: 0 });
    circle2 = Bodies.circle(200, 250, 35, { restitution: 0 });
    Composite.add(world, [ground, rectangle1, rectangle2, rectangle3, square, circle1, circle2]);
}

function draw() {
    background('#C0FEFC');
    Engine.update(engine);
    fill('green');
    rect(ground.position.x, ground.position.y, 600, 20);
    fill('grey');
    rect(rectangle1.position.x, rectangle1.position.y, 200, 20);
    rect(rectangle2.position.x, rectangle2.position.y, 200, 20);
    rect(rectangle3.position.x, rectangle3.position.y, 200, 20);
    fill('yellow');
    rect(square.position.x, square.position.y, 60, 60);
    fill('red');
    ellipseMode(RADIUS);
    ellipse(circle1.position.x, circle1.position.y, 35);
    ellipse(circle2.position.x, circle2.position.y, 35);
}