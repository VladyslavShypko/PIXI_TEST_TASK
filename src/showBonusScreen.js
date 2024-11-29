import { Graphics } from "pixi.js";
import chestAnimation from "./chestAnimation";

const showBonusScreen = (
  app,
  mainContainer,
  winAnimationContainer,
  winningAmount,
  bonusAmount
) => {
  const winTitle = `You win ${winningAmount}$`;
  const bonusTitle = `Bonus ${bonusAmount}$`;

  const circle = new Graphics();

  app.ticker.add(() => {
    circle
      .circle(
        Math.random() * app.screen.width,
        Math.random() * app.screen.height,
        5
      )
      .fill({
        color: 0xffffff,
      });
  });

  const winText = chestAnimation(
    app,
    winAnimationContainer,
    winTitle,
    62,
    0,
    5000
  );
  const bonusText = chestAnimation(
    app,
    winAnimationContainer,
    bonusTitle,
    62,
    80,
    5000
  );

  winAnimationContainer.addChild(circle);

  mainContainer.visible = false;
  winAnimationContainer.visible = true;

  setTimeout(() => {
    mainContainer.visible = true;
    winAnimationContainer.removeChild(winText);
    winAnimationContainer.removeChild(bonusText);
    winAnimationContainer.removeChild(circle);
    winAnimationContainer.visible = false;
  }, 5000);
};

export default showBonusScreen;
