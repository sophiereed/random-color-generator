function setup() {

  d = select('.div-block');
  d.position(0, 0);


  gui = new Gui();

  let gui_setup = new dat.GUI();

  gui_setup.add(gui, "r", 0, 255);
  gui_setup.add(gui, "g", 0, 255);
  gui_setup.add(gui, "b", 0, 255);


  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(gui.r, gui.g, gui.b);
  console.log('draw');

}

function Gui() {

  this.r = random(50, 255);
  this.g = random(0, 200);
  this.b = random(50, 255);

}


function deviceMoved() {
  r = map(accelerationX, -90, 90, 100, 175);
  g = map(accelerationY, -90, 90, 100, 200);
  b = map(accelerationZ, -90, 90, 100, 200);
}