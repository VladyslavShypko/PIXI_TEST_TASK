import chestAnimation from "./chestAnimation";
import showBonusScreen from "./showBonusScreen";
import setupGame from "./setupGame";
import data from "./data";

const results = {
  BONUS: "BONUS",
  WIN: "WIN",
  LOSE: "LOSE",
};

const openChest = (app, mainContainer, winAnimationContainer, chest, idx) => {
  let { chestStatuses, chests } = data;
  const { isWinner, isBonus, isOpen, winningAmount, bonusAmount } =
    chestStatuses[idx];

  if (isOpen) return;
  chestStatuses[idx].isOpen = true;

  const result = isWinner
    ? isBonus
      ? results.BONUS
      : results.WIN
    : results.LOSE;
  chestAnimation(app, chest, result, 22);

  if (result === results.BONUS) {
    setTimeout(() => {
      showBonusScreen(
        app,
        mainContainer,
        winAnimationContainer,
        winningAmount,
        bonusAmount
      );
    }, 3000);
  } else {
    if (!chestStatuses.find(({ isOpen }) => !isOpen)) {
      setTimeout(() => {
        setupGame(app, mainContainer, winAnimationContainer);
        chestStatuses = [];
        chests = [];
      }, 4000);
    }
  }
};

export default openChest;
