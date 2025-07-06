import "./fullscreenGate.css";

type OrientationLockType = "any" | "natural" | "landscape" | "portrait" | "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";

type FullscreenGateProps = {
  setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FullscreenGate({ setIsFullscreen }: FullscreenGateProps) {
  const handleClick = async () => {
    const el = document.documentElement;

    // Försök gå in i fullskärmsläge
    if (el.requestFullscreen) {
      try {
        await el.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.warn("Fullskärm kunde inte aktiveras:", err);
        setIsFullscreen(true); // Fortsätt ändå
      }
    } else {
      setIsFullscreen(true); // Fortsätt även om API saknas
    }

    // Försök låsa skärmorienteringen
    const orientation = screen.orientation as ScreenOrientation & {
      lock?: (orientation: OrientationLockType) => Promise<void>;
    };

    if (orientation?.lock) {
      try {
        await orientation.lock("landscape");
      } catch (err) {
        console.warn("Kunde inte låsa orienteringen:", err);
      }
    }
  };

  return (
    <div className="fullscreen-gate">
      <button className="fullscreen-btn" onClick={handleClick}>
        Klicka här för att starta spelet i fullskärm
      </button>
    </div>
  );
}
