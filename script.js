// AnimalGo!

///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

var aantal = 0;

// images
var imgP1;
var imgP2;
var imgWasd;
var imgArrows;
var imgGameover;
var imgDoorCarrot;
var imgDoorFish;
var imgcloud;
var imglongcloud;
var imgFish;

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

var spelStatus = SPELEN;

// XY start van spelers
var spelerX = 1075; // x-positie van speler
var spelerY = 700; // y-positie van speler
var speler2X = 200; // x-positie van speler2
var speler2Y = 700; // y-positie van speler2

var health = 10;

// valkuilen
var valkuilX = 655;
var valkuilY = 665;

var valkuil2X = 655;
var valkuil2Y = 400;

// platforms
var platformX = 380;
var platformY = 660;
var platformHoogte = 15;
var platformBreedte = 90;

var platform2X = 580;
var platform2Y = 600;
var platform2Hoogte = 15;
var platform2Breedte = 150;

var platform3X = 840;
var platform3Y = 660;
var platform3Hoogte = 15;
var platform3Breedte = 90;

var platform4X = 370;
var platform4Y = 530;
var platform4Hoogte = 15;
var platform4Breedte = 150;

var platform5X = 810;
var platform5Y = 530;
var platform5Hoogte = 15;
var platform5Breedte = 150;

var platform6X = 140;
var platform6Y = 600;
var platform6Hoogte = 15;
var platform6Breedte = 150;

var platform7X = 1050;
var platform7Y = 600;
var platform7Hoogte = 15;
var platform7Breedte = 150;

var platform8X = 552;
var platform8Y = 455;
var platform8Hoogte = 15;
var platform8Breedte = 90;

var platform9X = 675;
var platform9Y = 455;
var platform9Hoogte = 15;
var platform9Breedte = 90;

var timer = 30;

var doorFishX = 600;
var doorFishY = 400;
var doorCarrotX = 720;
var doorCarrotY = 400;  


//collect
var fishX = 225;
var fishY = 590;

// speler
var spelerSpringt = false;
var springSnelheid = 5;
var springSnelheidStart = 5;
var zwaartekracht = 0.2;

// speler2
var speler2Springt = false;
var speler2SpringSnelheid = 5;
var speler2SpringSnelheidStart = 5;
var speler2Zwaartekracht = 0.2;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

function preload() {
  imgP1 = loadImage('bunny.png');
  imgP2 = loadImage('cat.png');
  imgWasd = loadImage('wasd.png');
  imgArrows = loadImage('arrows.png');
  imgGameover = loadImage('game-over.png');
  imgDoorCarrot = loadImage('doorCarrot.png');
  imgDoorFish = loadImage('doorFish.png');
  imgcloud = loadImage('smallcloud.png');
  imglongcloud = loadImage('longcloud.png');
  imgFish = loadImage('fish.png');
}

function setup() {
  createCanvas(1280, 720);
}

/**
 * posities/beweging van spelers */

var timer = function() {
  timer = (timer * 1000) - 1;
}

var beweegAlles = function() {
  // speler naar linsk of rechts
  if (keyIsDown(RIGHT_ARROW)) {
    spelerX = spelerX + 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - 3;
  }
  // speler landt op platform 1
  if (spelerY + 10 >= platformY && spelerY + 10 <= platformY + platformHoogte && spelerX >= platformX && spelerX <= platformX + platformBreedte) {
    spelerY = platformY - 10;
    spelerSpringt = false;
  }
// speler landt op platform 2
  if (spelerY + 1 >= platform2Y && spelerY + 1 <= platform2Y + platform2Hoogte && spelerX >= platform2X && spelerX <= platform2X + platform2Breedte) {
    spelerY = platform2Y - 5;
    spelerSpringt = false;
  }

// speler landt op platform 3
  if (spelerY + 10 >= platform3Y && spelerY + 10 <= platform3Y + platform3Hoogte && spelerX >= platform3X && spelerX <= platform3X + platform3Breedte) {
    spelerY = platform3Y - 5;
    spelerSpringt = false;
  }

 // speler landt op platform 4
  if (spelerY + 1 >= platform4Y && spelerY + 10 <= platform4Y + platform4Hoogte && spelerX >= platform4X && spelerX <= platform4X + platform4Breedte) {
    spelerY = platform4Y - 5;
    spelerSpringt = false;
  }

 // speler landt op platform 5
  if (spelerY + 1 >= platform5Y && spelerY + 10 <= platform5Y + platform5Hoogte && spelerX >= platform5X && spelerX <= platform5X + platform5Breedte) {
    spelerY = platform5Y - 5;
    spelerSpringt = false;
  }

  // speler landt op platform 6
  if (spelerY + 1 >= platform6Y && spelerY + 10 <= platform6Y + platform6Hoogte && spelerX >= platform6X && spelerX <= platform6X + platform6Breedte) {
    spelerY = platform6Y - 5;
    spelerSpringt = false;
  }

// speler landt op platform 7
  if (spelerY + 1 >= platform7Y && spelerY + 10 <= platform7Y + platform7Hoogte && spelerX >= platform7X && spelerX <= platform7X + platform7Breedte) {
    spelerY = platform7Y - 5;
    spelerSpringt = false;
  }

  // speler landt op platform 8
  if (spelerY + 1 >= platform8Y && spelerY + 1 <= platform8Y + platform8Hoogte && spelerX >= platform8X && spelerX <= platform8X + platform8Breedte) {
    spelerY = platform8Y - 5;
    spelerSpringt = false;
  }

  // speler landt op platform 9
  if (spelerY + 1 >= platform9Y && spelerY + 1 <= platform9Y + platform9Hoogte && spelerX >= platform9X && spelerX <= platform9X + platform9Breedte) {
    spelerY = platform9Y - 5;
    spelerSpringt = false;
  }



  if (spelerSpringt === false &&
    keyIsDown(UP_ARROW)) {
    spelerSpringt = true;
    springSnelheid = springSnelheidStart;
  }

  if (spelerSpringt === true) {
    spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - 0.2;
  }
  if (spelerY > 690) {
    spelerSpringt = false;
  }

  // speler2
  if (keyIsDown(68)) {
    speler2X = speler2X + 3;
  }
  if (keyIsDown(65)) {
    speler2X = speler2X - 3;
  }
  
//speler2 landt op platform1
  if (speler2Y + 10 >= platformY && speler2Y + 10 <= platformY + platformHoogte && speler2X >= platformX && speler2X <= platformX + platformBreedte) {
    speler2Y = platformY - 10;
    speler2Springt = false;
  }
  
//speler2 landt op platform 2
  if (speler2Y + 1 >= platform2Y && speler2Y + 1 <= platform2Y + platform2Hoogte && speler2X >= platform2X && speler2X <= platform2X + platform2Breedte) {
    speler2Y = platform2Y - 5;
    speler2Springt = false;
  }
  
//speler2 landt op platform 3
  if (speler2Y + 1 >= platform3Y && speler2Y + 1 <= platform3Y + platform3Hoogte && speler2X >= platform3X && speler2X <= platform3X + platform3Breedte) {
    speler2Y = platform3Y - 5;
    speler2Springt = false;
  }
  
//speler2 landt op platform 4
    if (speler2Y + 1 >= platform4Y && speler2Y + 1 <= platform4Y + platform4Hoogte && speler2X >= platform4X && speler2X <= platform4X + platform4Breedte) {
    speler2Y = platform4Y - 5;
    speler2Springt = false;
  }

  //speler2 landt op platform 5
    if (speler2Y + 1 >= platform5Y && speler2Y + 1 <= platform5Y + platform5Hoogte && speler2X >= platform5X && speler2X <= platform5X + platform5Breedte) {
    speler2Y = platform5Y - 5;
    speler2Springt = false;
  }

  //speler2 landt op platform 6
    if (speler2Y + 1 >= platform6Y && speler2Y + 1 <= platform6Y + platform6Hoogte && speler2X >= platform6X && speler2X <= platform6X + platform6Breedte) {
    speler2Y = platform6Y - 5;
    speler2Springt = false;
  }

  //speler2 landt op platform 7
    if (speler2Y + 1 >= platform7Y && speler2Y + 1 <= platform7Y + platform7Hoogte && speler2X >= platform7X && speler2X <= platform7X + platform7Breedte) {
    speler2Y = platform7Y - 5;
    speler2Springt = false;
  }

  //speler2 landt op platform 8
    if (speler2Y + 1 >= platform8Y && speler2Y + 1 <= platform8Y + platform8Hoogte && speler2X >= platform8X && speler2X <= platform8X + platform8Breedte) {
    speler2Y = platform8Y - 5;
    speler2Springt = false;
  }

    //speler2 landt op platform 9
    if (speler2Y + 1 >= platform9Y && speler2Y + 1 <= platform9Y + platform9Hoogte && speler2X >= platform9X && speler2X <= platform9X + platform9Breedte) {
    speler2Y = platform9Y - 5;
    speler2Springt = false;
  }
  
  if (speler2Springt === false &&
    keyIsDown(87)) {
    speler2Springt = true;
    speler2SpringSnelheid = speler2SpringSnelheidStart;
  }

  if (speler2Springt === true) {
    speler2Y = speler2Y - speler2SpringSnelheid;
    speler2SpringSnelheid = speler2SpringSnelheid - 0.2;
  }

  if (speler2Y > 690) {
    speler2Springt = false;
  }
};

/**
 * Checkt botsingen
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerX - valkuilX < 40 &&
    spelerX - valkuilX > -40 &&
    spelerY - valkuilY < 60 &&
    spelerY - valkuilY > -60) {
    aantal = aantal + 1
    console.log("Botsing1 " + aantal);
    health = health - 5;
  }
  // botsing kogel tegen vijand
  if (speler2X - valkuilX < 40 &&
    speler2X - valkuilX > -40 &&
    speler2Y - valkuilY < 60 &&
    speler2Y - valkuilY > -60) {
    aantal = aantal + 1
    console.log("Botsing2 " + aantal);
    //health
    health = health - 5;
  }
  //botsing valkuil2
    if (spelerX - valkuil2X < 40 &&
    spelerX - valkuil2X > -40 &&
    spelerY - valkuil2Y < 60 &&
    spelerY - valkuil2Y > -60) {
    aantal = aantal + 1
    console.log("Botsing3 " + aantal);
    health = health - 5;
  }
    //botsing valkuil2
    if (speler2X - valkuil2X < 40 &&
    speler2X - valkuil2X > -40 &&
    speler2Y - valkuil2Y < 60 &&
    speler2Y - valkuil2Y > -60) {
    aantal = aantal + 1
    console.log("Botsing4 " + aantal);
    health = health - 5;
  }
};

// Tekent speelscherm
var tekenAlles = function() {
  // achtergrond
  fill("lightpink");
  rect(0, 0, 1280, 720);

  //WASD
  image(imgWasd, 130, 200,  180, 150);

  //Arrows
  image(imgArrows, 1030, 200, 200, 130);

  //doors
  image(imgDoorFish, doorFishX -40, doorFishY -60, 80, 120);
  fill("black");
  ellipse(doorFishX, doorFishY, 10, 10);
  image(imgDoorCarrot, doorCarrotX -45, doorCarrotY -65, 90, 140);
  ellipse(doorCarrotX, doorCarrotY, 10, 10);
  
  //speler 1
  image(imgP1, speler2X - 35, speler2Y - 80, 70, 90);
  fill("black");
  ellipse(speler2X, speler2Y, 10, 10);
  
  //speler 2
  image(imgP2, spelerX - 30, spelerY - 75, 60, 80);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  //timer 
  
  
  //fish
  image(imgFish, fishX + 10, fishY + 20, 800, 800);
  fill("black");
  ellipse(fishX, fishY, 10, 10);
  
  //valkuil
  fill("red");
  rect(valkuilX - 14, valkuilY - 50, 28, 100);
  fill("yellow");
  ellipse(valkuilX, valkuilY, 10, 10);

  //valkuil 2
  fill("red");
  rect(valkuil2X - 14, valkuil2Y - 50, 28, 100);
  fill("yellow");
  ellipse(valkuil2X, valkuil2Y, 10, 10);
  
  //platform
  image(imgcloud, platformX - 96, platformY - 182, 400, 400);
  fill("black");
  rect(platformX, platformY, platformBreedte, 15);
  
  //platform2
  image(imglongcloud, platform2X - 130, platform2Y - 182, 400, 400);
  fill("black");
  rect(platform2X, platform2Y, platform2Breedte, 15);
  
  //platform3
  image(imgcloud, platform3X - 96, platform3Y - 182, 400, 400);
  fill("black");
  rect(platform3X, platform3Y, platform3Breedte, 15);
  
  //platform4
  image(imglongcloud, platform4X - 130, platform4Y - 182, 400, 400);
  fill("black");
  rect(platform4X, platform4Y, platform4Breedte, 15);
  
  //platform5
  image(imglongcloud, platform5X - 130, platform5Y - 182, 400, 400);
  fill("black");
  rect(platform5X, platform5Y, platform5Breedte, 15);

  //platform6
  image(imglongcloud, platform6X - 130, platform6Y - 182, 400, 400);
  fill("black");
  rect(platform6X, platform6Y, platform6Breedte, 15);


  //platform7
  image(imglongcloud, platform7X - 130, platform7Y - 182, 400, 400);
  fill("black");
  rect(platform7X, platform7Y, platform7Breedte, 15);

  //platform 8
  image(imgcloud, platform8X - 96, platform8Y - 182, 400, 400);
  fill("black");
  rect(platform8X, platform8Y, platform8Breedte, 15);

  //platform 9
  image(imgcloud, platform9X - 96, platform9Y - 182, 400, 400);
  fill("black");
  rect(platform9X, platform9Y, platform9Breedte, 15);
}

var checkGameOver = function() {
  if (health <= 0) {
    return true;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over");
    image(imgGameover, 280, 20, 700, 600);
    if (keyIsDown(32)) {
      spelerX = 1075;
      spelerY = 700;
      speler2X = 200;
      speler2Y = 700;
      health = 50;
      spelStatus = SPELEN;
    }
  }
}
