import "./App.css";
import { useGameLogic } from "./hooks/useGameLogic";
import { Gameboard } from "./components/gameboard/Gameboard";
import StartGameModal from "./components/startGameModal/StartGameModal";
import PortraitBlocker from "./components/portraitBlocker/PortraitBlocker";
import GameOverModal from "./components/gameOverModal/GameOverModal";
import FullscreenGate from "./components/fullscreenGate/FullscreenGate";

function App() {
  const { gameState, isGameReady, resetGameState, isGameStarted, setIsGameStarted, activeCharacters, isFullscreen, setIsFullscreen, handleCharacterClick, handleCharacterRemoval } = useGameLogic();

  return (
    <>
      {/* {isGameReady && !isGameStarted && <StartGameModal setIsGameStarted={setIsGameStarted} resetGameState={resetGameState} />} */}

      {/* Visa fullscreen-knappen först */}
      {isGameReady && !isFullscreen && <FullscreenGate setIsFullscreen={setIsFullscreen} />}

      {/* Vanliga modaler när vi redan är i fullskärm */}
      {isGameReady && isFullscreen && !isGameStarted && <StartGameModal setIsGameStarted={setIsGameStarted} resetGameState={resetGameState} />}

      {gameState.isGameOver && <GameOverModal score={gameState.score} resetGameState={resetGameState} />}
      <PortraitBlocker />

      {isGameReady && (
        <Gameboard
          gameState={gameState}
          isGameStarted={isGameStarted}
          activeCharacters={activeCharacters}
          handleCharacterClick={handleCharacterClick}
          handleCharacterRemoval={handleCharacterRemoval}
        />
      )}
    </>
  );
}

export default App;
