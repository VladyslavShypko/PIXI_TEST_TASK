import {
  Application,
  Assets,
  TilingSprite,
  Container,
  Graphics,
  BlurFilter,
  AlphaFilter,
} from "pixi.js";
import data from "./data";
import setupGame from "./setupGame";

let app;

(async () => {
  app = new Application();

  await app.init({
    resizeTo: window,
  });

  app.canvas.style.position = "absolute";

  document.body.appendChild(app.canvas);

  const texture = await Assets.load("/images/main_background.png");

  const bgSprite = new TilingSprite({
    texture,
    width: app.screen.width,
    height: app.screen.height,
  });

  app.ticker.add(function () {
    bgSprite.tilePosition.x -= 1;
  });

  app.stage.addChild(bgSprite);

  const mainContainer = new Container();
  app.stage.addChild(mainContainer);

  const { chestColumnWidth } = data;

  //Set the container position
  mainContainer.x = (app.screen.width - chestColumnWidth - 150) / 2; // Center horizontally
  mainContainer.y = (app.screen.height - 3 * 60) / 2; // Center vertically

  const winAnimationContainer = new Container();
  app.stage.addChild(winAnimationContainer);

  winAnimationContainer.x = 20;
  winAnimationContainer.y = 20;

  const winAnimationMask = new Graphics()
    .rect(0, 0, app.screen.width - 40, app.screen.height - 40)
    .fill(0x000000);

  winAnimationMask.filters = [
    new BlurFilter({ strength: 15 }),
    new AlphaFilter({ alpha: 0.9 }),
  ];

  winAnimationContainer.visible = false;

  winAnimationContainer.winAnimationMask = winAnimationMask;
  winAnimationContainer.addChild(winAnimationMask);

  // Setup the game
  setupGame(app, mainContainer, winAnimationContainer);
})();

console.log("app", app);
