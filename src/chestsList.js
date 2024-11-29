import { Text, Graphics } from "pixi.js";
import openChest from "./openChest";
import data from "./data";

const createChest = (
  app,
  mainContainer,
  winAnimationContainer,
  x,
  y,
  text,
  idx
) => {
  const chest = new Graphics().rect(0, 0, 150, 50).fill(0x66ccff);

  chest.x = x;
  chest.y = y;

  // Create text for the chest
  const chestText = new Text({
    text: text,
    style: {
      fontFamily: "Arial",
      fontSize: 24,
      fill: 0xffffff,
      align: "center",
    },
  });

  chestText.x = chest.width / 2 - chestText.width / 2;
  chestText.y = chest.height / 2 - chestText.height / 2;

  chest.addChild(chestText);
  mainContainer.addChild(chest);

  // Add interactive event to the chest
  chest.interactive = false;
  chest.buttonMode = true;
  chest.cursor = "pointer";

  chest.on("pointerdown", () => {
    chest.removeChild(chestText);
    openChest(app, mainContainer, winAnimationContainer, chest, idx);
  });

  // Hover effect
  chest.on("pointerover", () => {
    chest.clear();
    chest.rect(0, 0, 150, 50).fill(0x72a0c1);
  });

  chest.on("pointerout", () => {
    chest.clear();
    chest.rect(0, 0, 150, 50).fill(0x66ccff); // Reset color when not hovering
  });

  data.chests.push(chest);
};

const calcYposition = (idx) => {
  const buttonMargin = 10; // Margin between chests

  return idx * (50 + buttonMargin);
};

const gestChestText = (idx, step) => `Chest ${idx + step}`;

const chestsList = (app, mainContainer, winAnimationContainer, columnWidth) => {
  for (let i = 0; i < 3; i++) {
    // Left column
    createChest(
      app,
      mainContainer,
      winAnimationContainer,
      10,
      calcYposition(i),
      gestChestText(i, 1),
      i
    );

    // Right column (offset horizontally by columnWidth)
    createChest(
      app,
      mainContainer,
      winAnimationContainer,
      columnWidth,
      calcYposition(i),
      gestChestText(i, 4),
      3 + i
    );
  }
};

export default chestsList;
