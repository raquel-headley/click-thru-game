/*let img = [];

function preload() {

  for(let i=0; i<5;i++){
  img[i] = loadImage(i + '.png');}


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  image(img[4], 0, 0);

  
}

function draw(){

  console.log("hello");
}*/



///////ATTEMPT 2: ////////////////////////

/*let img = [];

function preload() {
  for (let i = 0; i < 5; i++) {
    img[i] = loadImage(i + '.png');
  }
}

function setup() {
  createCanvas(400, 400);
  image(img[4], 0, 0);
}*/


/////////ATTEMPT 3: ///////////////////////////

let img = [];
let button;
let currentIndex = 0;

function preload(){

  for(let i=0; i<4; i++){
img[i] = loadImage(i + '.png');

  }
  //img = loadImage('1.png');

}

function setup(){

  createCanvas(windowWidth,windowHeight);
  background(0);
  image(img[0],0,0);

  button = createButton('-> next option');
  button.position(width/2,height*0.9);
  button.style('background-color','transparent');
  button.style('color','white');
  button.mousePressed(nextOption);

}

function draw(){

  
}

function nextOption(){

  currentIndex = (currentIndex + 1);
  background(0);
  image(img[currentIndex], 0, 0);

}