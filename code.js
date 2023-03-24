var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ce1756da-c373-48af-80a7-21b9bf079bda"],"propsByKey":{"ce1756da-c373-48af-80a7-21b9bf079bda":{"name":"Ball","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"zxVFIEFIt7AD0d.eP2GS6i9uM2fmb_5P","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/ce1756da-c373-48af-80a7-21b9bf079bda.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Playerpaddle = createSprite(350, 200, 10, 70);
Playerpaddle.shapeColor = "red";
var Computerpaddle = createSprite(50, 200, 10, 70);
Computerpaddle.shapeColor = "blue";
var Ball = createSprite(200, 200, 7, 7);
Ball.shapeColor = "black";
Ball.setAnimation("Ball");
function draw(){  
  background("pink");
  if (Ball.isTouching(Playerpaddle) || Ball.isTouching(Computerpaddle)) {
    playSound("assets/category_accent/puzzle_game_accent_b_02.mp3");
  }
  createEdgeSprites();
  if (keyDown("up")) {
    Playerpaddle.y = Playerpaddle.y -10;
  }
  if (keyDown("down")) {
    Playerpaddle.y = Playerpaddle.y +10;
  }
  if (keyDown("space")) {
    Ball.velocityX = 4;
    Ball.velocityY = -2;
  }
  Computerpaddle.y = Ball.y;
  createEdgeSprites();
  Ball.bounceOff(topEdge);
  Ball.bounceOff(bottomEdge);
  Ball.bounceOff(Computerpaddle);
  Ball.bounceOff(Playerpaddle);
  crearLineas();
  drawSprites();
   }
function crearLineas() {
  for (var i = 0; i <= 400; i = i + 20) {
    line(200, i, 200, i + 10);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
