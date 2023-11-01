var path, jimmy, bola, biscoito, amor, bela;
var pathImg, jimmyImg, bolaImg, biscoitoImg, amorImg, belaImg, endImg;
var felicidadeCollection = 0;
var bolaG, biscoitoG, amorG, belaGroup;


var PLAY = 1;
var END = 0;
var gameState = 1;


function preload() {
  pathImg = loadImage("path.png")
  jimmyImg = loadImage("jimmy1.png")
  bolaImg = loadImage("bola.png")
  biscoitoImg = loadImage("biscoito.png")
  amorImg = loadImage("amor.png")
  belaImg = loadImage("bela.png")
  endImg = loadImage("fimdejogo.png")
}

function setup() {


  createCanvas(windowWidth, windowHeight);


  path = createSprite(width / 2, 200);
  path.addImage(pathImg);
  path.velocityY = 4;


  jimmy = createSprite(width / 2, height - 20, 20, 20);
  jimmy.scale = 0.2;
  jimmy.addImage(jimmyImg);

  bolaG = new Group();
  biscoitoG = new Group();
  amorG = new Group();
  belaGroup = new Group();

}

function draw() {

  if (gameState === PLAY) {
    background(0);
    jimmy.x = World.mouseX;

    edges = createEdgeSprites();
    jimmy.collide(edges);


    if (path.y > height) {
      path.y = height / 2;
    }


    createBola();
    createBiscoito();
    createAmor();
    createBela();

    if (bolaG.isTouching(jimmy)) {
      bolaG.destroyEach();
      felicidadeCollection = felicidadeCollection + 50;
    }
    else if (biscoitoG.isTouching(jimmy)) {
      biscoitoG.destroyEach();
      felicidadeCollection = felicidadeCollection + 100;

    } else if (amorG.isTouching(jimmy)) {
      amorG.destroyEach();
      felicidadeCollection = felicidadeCollection + 150;

    } else {
      if (belaGroup.isTouching(jimmy)) {
        gameState = END;

        jimmy.addImage(endImg);
        jimmy.position.x = width / 2;
        jimmy.position.y = height / 2;
        jimmy.scale = 0.6;

        bolaG.destroyEach();
        biscoitoG.destroyEach();
        amorG.destroyEach();
        belaGroup.destroyEach();

        bolaG.setVelocityYEach(0);
        biscoitoG.setVelocityYEach(0);
        amorG.setVelocityYEach(0);
        belaGroup.setVelocityYEach(0);


      }
    }

    drawSprites();
    textSize(20);
    fill(255);
    text("Felicidade: " + felicidadeCollection, width - 150, 30);
  }

}

function createBola() {
  if (World.frameCount % 200 == 0) {
    var x = random(50, width - 50);
    var y = random(40, height - 40);
    var bola = createSprite(x, y, 10, 10);
    bola.addImage(bolaImg);
    bola.scale = 0.15;
    bola.velocityY = 5;
    bola.lifetime = 250;
    bolaG.add(bola);
  }
}

function createBiscoito() {
  if (World.frameCount % 200 == 0) {
    var x = random(50, width - 50);
    var y = random(40, height - 40);
    var biscoito = createSprite(x, y, 10, 10);
    biscoito.addImage(biscoitoImg);
    biscoito.scale = 0.2;
    biscoito.velocityY = 5;
    biscoito.lifetime = 250;
    biscoitoG.add(biscoito);
  }
}

function createAmor() {
  if (World.frameCount % 200 == 0) {
    var x = random(50, width - 50);
    var y = random(40, height - 40);
    var amor = createSprite(x, y, 10, 10);
    amor.addImage(amorImg);
    amor.scale = 0.15;
    amor.velocityY = 5;
    amor.lifetime = 250;
    amorG.add(amor);
  }
}

function createBela() {
  if (World.frameCount % 200 == 0) {
    var x = random(50, width - 50);
    var y = random(40, height - 40);
    var bela = createSprite(x, y, 10, 10);
    bela.addImage(belaImg);
    bela.scale = 0.2;
    bela.velocityY = 5;
    bela.lifetime = 250;
    belaGroup.add(bela);
  }
}
