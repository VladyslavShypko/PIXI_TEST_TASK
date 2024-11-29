import chestsList from "./chestsList";
import createPlayButton from "./createPlayButton";
import data from "./data";

const setupGame = (app, mainContainer, winAnimationContainer) => {
  const { chestColumnWidth } = data;

  chestsList(app, mainContainer, winAnimationContainer, chestColumnWidth);
  createPlayButton(mainContainer);
};

export default setupGame;
