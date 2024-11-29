import { Text, Graphics } from "pixi.js";
import startGame from "./startGame";

const createPlayButton = (mainContainer) => {
  const playButton = new Graphics().rect(0, 0, 150, 50).fill(0xe7781c);

  const playText = new Text({
    text: "PLAY",
    style: {
      fontFamily: "Arial",
      fontSize: 24,
      fill: 0xffffff,
      align: "center",
    },
  });

  playText.x = playButton.width / 2 - playText.width / 2;
  playText.y = playButton.height / 2 - playText.height / 2;

  playButton.addChild(playText);
  playButton.x = (mainContainer.width - playButton.width) / 2;
  playButton.y = 200;
  playButton.interactive = true;
  playButton.buttonMode = true;
  playButton.cursor = "pointer";

  // Start game logic
  playButton.on("pointerdown", () => {
    startGame(playButton);
  });

  mainContainer.addChild(playButton);
};

export default createPlayButton;
