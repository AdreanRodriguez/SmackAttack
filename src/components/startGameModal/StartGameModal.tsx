import "./startGameModal.css";
import Button from "../button/Button";
import { startGame } from "./../../gameLogic/startGame";

interface GameOverModalProps {
  onClick?: () => void;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  resetGameState: () => void;
}

export default function StartGameModal({ setIsGameStarted, resetGameState }: GameOverModalProps) {
  function handleStartGame() {
    startGame(setIsGameStarted, resetGameState);
  }

  return (
    <>
      <section className="startGameModal__wrapper">
        <div className="startGameModal">
          <h1 className="startGameModal__title">SmackAttack</h1>

          <figcaption className="startGameModal__rule__good">
            <figure className="startGameModal__image__container">
              <img className="startGameModal__image" src="/assets/goodCharacters/good.png" alt="Den gode" />
            </figure>
            <p className="startGameModal__text">minus 3 sekunder vid klick</p>
          </figcaption>

          <figcaption className="startGameModal__rule__evil">
            <p className="startGameModal__text">10 Poäng plus 2 sekunder vid klick</p>
            <figure className="startGameModal__image__container">
              <img className="startGameModal__image" src="/assets/evilCharacters/evil.png" alt="Den onde" />
            </figure>
          </figcaption>
          <Button onClick={handleStartGame} name="SPELA" />
          <p className="startGameModal__collaboration">
            Illustratör:
            <a href="https://www.instagram.com/jimmieslice/" target="_blank">
              JimmieSlice
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
