
function preload() {
  img = loadImage('cat.png');
  img2 = loadImage('bunny.png');
}
function setup() {
  image (img, 0, 0);
}
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
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const UP_ARROW = 38;
const DOWN_ARROW = 40;

var spelerX = 1075; // x-positie van speler
var spelerY = 600; // y-positie van speler
var speler2X = 200;
var speler2Y = 600;

var spelerSpringt = false;
var springSnelheid = 5;
var springSnelheidStart = 5;
var zwaartekracht = 0.2;

var speler2Springt = false;
var speler2springSnelheid = 5;
var speler2springSnelheidStart = 5;
var speler2zwaartekracht = 0.2;

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
    speler2springSnelheid = speler2springSnelheidStart;
  }

    if (speler2Springt === true) {
    speler2Y = speler2Y - speler2springSnelheid;
    speler2springSnelheid = speler2springSnelheid - 0.2;
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

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  fill ("lightpink");
  rect(0, 0, 1280, 720);
  // platforms


  
  // kogel

  // speler
  image(img, spelerX -20, spelerY -10, 70, 100);
  //speler2
  image(img2, speler2X -25, speler2Y -40, 80, 130);
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

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

  }
}
