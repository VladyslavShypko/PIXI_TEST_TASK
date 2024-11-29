import data from "./data";

const getRandomSumIfWinner = (isWinner, max) =>
  isWinner ? Math.floor(Math.random() * max) : 0;

const startGame = (playButton) => {
  playButton.interactive = false;
  playButton.visible = false;

  data.chestStatuses = Array(6)
    .fill()
    .map(() => {
      const isWinner = Math.random() < 0.5;
      const isBonus = Math.random() < 0.1;

      return {
        isWinner: isWinner,
        isBonus: isBonus,
        isOpen: false,
        winningAmount: getRandomSumIfWinner(isWinner, 1000),
        bonusAmount: getRandomSumIfWinner(isBonus, 500),
      };
    });

  data.chests.forEach((chest) => (chest.interactive = true));
};

export default startGame;
