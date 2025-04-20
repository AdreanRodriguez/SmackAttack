export const startGame = (setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>, resetGameState: () => void) => {
  resetGameState();
  setIsGameStarted(true);
};
