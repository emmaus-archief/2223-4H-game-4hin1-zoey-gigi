//test2
/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var aantal = 0;

var imgP1;
var imgP2;
var imgGameover;
var imgcloud;
var imglongcloud;

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = SPELEN;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

var spelerX = 1075; // x-positie van speler
var spelerY = 700; // y-positie van speler
var speler2X = 200;
var speler2Y = 700;
var health = 50;

var valkuilX = 325;
var valkuilY = 700;

var platformX = 460;
var platformY = 660;
var platformHoogte = 15;
var platformBreedte = 90;

var platform2X = 230;
var platform2Y = 600;
var platform2Hoogte = 15;
var platform2Breedte = 90;

var spelerSpringt = false;
var springSnelheid = 5;
var springSnelheidStart = 5;
var zwaartekracht = 0.2;

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
  imgGameover = loadImage('game-over.png');
  imgcloud = loadImage('smallcloud.png');
  imglongcloud = loadImage('longcloud.png');
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
if (keyIsDown(RIGHT_ARROW)) {
  spelerX = spelerX +3;
}
if (keyIsDown(LEFT_ARROW)) {
  spelerX = spelerX -3;
}
if (spelerY + 10 >= platformY && spelerY + 10 <= platformY + platformHoogte && spelerX >= platformX && spelerX <= platformX + platformBreedte) {
  spelerY = platformY - 10;
  spelerSpringt = false;
}

  if (spelerY + 10 >= platform2Y && spelerY + 10 <= platform2Y + platform2Hoogte && spelerX >= platform2X && spelerX <= platform2X + platform2Breedte) {
  spelerY = platform2Y - 10;
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
    speler2X = speler2X +3;
  }
    if (keyIsDown(65)) {
    speler2X = speler2X -3;
  }

if (speler2Y + 10 >= platformY && speler2Y + 10 <= platformY + platformHoogte && speler2X >= platformX && speler2X <= platformX + platformBreedte) {
  speler2Y = platformY - 10;
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
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
if (spelerX - valkuilX < 40 &&
   spelerX - valkuilX > -40 &&
   spelerY - valkuilY < 40 &&
   spelerY - valkuilY > -40) {
   aantal = aantal + 1
   console.log("Botsing1 " + aantal);
  health = health - 1;
   }
  // botsing kogel tegen vijand
if (speler2X - valkuilX < 40 &&
   speler2X - valkuilX > -40 &&
   speler2Y - valkuilY < 40 &&
   speler2Y - valkuilY > -40) {
   aantal = aantal + 1
   console.log("Botsing2 " + aantal);
  health = health - 1;
   }
  // update punten en health

};

 // Tekent spelscherm
var tekenAlles = function() {
  // achtergrond
  fill ("lightpink");
  rect(0, 0, 1280, 720);
  // speler 1
  image(imgP1, speler2X -35, speler2Y -80, 70, 90);
  fill("black");
  ellipse(speler2X,speler2Y, 10, 10);
  //speler 2
  image(imgP2, spelerX -30, spelerY -75, 60, 80);
  fill("black");
  ellipse(spelerX,spelerY, 10, 10);
  //valkuil
  fill ("red");
  rect (valkuilX - 14, valkuilY -10, 28, 20);
    fill("yellow");
  ellipse(valkuilX ,valkuilY ,10,10);
  // punten en health
  //platform
  image(imgcloud, platformX -96, platformY -182, 400, 400);
  fill("black");
  rect (platformX, platformY, 90, 15);
  //platform2
  image(imglongcloud, platform2X - 130, platform2Y -182, 400, 400); 
  fill("black");
  rect (platform2X, platform2Y, 150, 15);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  if (health <=0) {
    return true;
  }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === 1) {
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
      speler2X = 200;
      spelStatus = SPELEN;
    }
  }
  if (spelStatus === UITLEG) {
    console.log("uitleg");
  }
}

