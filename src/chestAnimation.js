import { Text } from "pixi.js";

const chestAnimation = (
  app,
  component,
  text,
  textSize,
  paddingY = 0,
  duration = 3000
) => {
  const winText = new Text({
    text: text,
    style: {
      fontFamily: "Arial",
      fontWeight: 500,
      fontSize: textSize,
      fill: 0xe55192,
      align: "center",
    },
  });

  winText.anchor.set(0.5);
  winText.x = component.width / 2;
  winText.y = component.height / 2 + paddingY;

  // Add winText to stage
  component.addChild(winText);

  const winTextAnimate = () => {
    winText.scale.x = 1 + Math.sin(app.ticker.lastTime / 300) * 0.2; // Pulsating scale on X axis
    winText.scale.y = 1 + Math.sin(app.ticker.lastTime / 300) * 0.2; // Pulsating scale on Y axis
    winText.alpha = 0.5 + 0.5 * Math.cos(app.ticker.lastTime / 500); // Fade in/out effect
  };

  // Animate winText
  app.ticker.add(winTextAnimate);

  setTimeout(() => {
    app.ticker.remove(winTextAnimate);
    winText.alpha = 1;
    winText.scale.set(1, 1);
  }, duration);

  return winText;
};

export default chestAnimation;
