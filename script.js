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

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = SPELEN;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

var spelerX = 1075; // x-positie van speler
var spelerY = 600; // y-positie van speler
var speler2X = 200;
var speler2Y = 600;
var health = 50;

var valkuilX = 650;
var valkuilY = 605;
  
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

  if (spelerSpringt === false &&
     keyIsDown(UP_ARROW)) {
    spelerSpringt = true;
    springSnelheid = springSnelheidStart;
  }

  if (spelerSpringt === true) {
    spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - 0.2;
  }
  if (spelerY > 597) {
    spelerSpringt = false;
  }

  // speler2
  if (keyIsDown(68)) {
    speler2X = speler2X +3;
  }
    if (keyIsDown(65)) {
    speler2X = speler2X -3;
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

    if (speler2Y > 597) {
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
if (spelerX - valkuilX < 50 &&
   spelerX - valkuilX > -50 &&
   spelerY - valkuilY < 50 &&
   spelerY - valkuilY > -50) {
   aantal = aantal + 1
   console.log("Botsing1 " + aantal);
  health = health - 1;
   }
  // botsing kogel tegen vijand
if (speler2X - valkuilX < 50 &&
   speler2X - valkuilX > -50 &&
   speler2Y - valkuilY < 50 &&
   speler2Y - valkuilY > -50) {
   aantal = aantal + 1
   console.log("Botsing2 " + aantal);
  health = health - 1;
   }
  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  fill ("lightpink");
  rect(0, 0, 1280, 720);
  // speler
  image(imgP1, spelerX -20, spelerY, 60, 80);
  fill("black");
  ellipse(spelerX,spelerY, 10, 10);
  //speler2
  image(imgP2, speler2X -25, speler2Y, 70, 90);
  fill("black");
  ellipse(speler2X,speler2Y, 10, 10);
  //valkuil
  fill ("red");
  rect (valkuilX - 25, valkuilY -25, 50, 50);
    fill("yellow");
  ellipse(valkuilX,valkuilY,10,10);
  // punten en health
  fill("yellow");
  text('health');
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
function preload() {
  imgP1 = loadImage('cat.png');
  imgP2 = loadImage('bunny.png');
  imgGameover = loadImage('game-over.png');
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

