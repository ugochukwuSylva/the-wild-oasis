import { useEffect } from "react";

export function useCloseModalEscapeKey(handler) {
  // The useEffect here implements the functionality of closing the modal window when the Escape button is pressed.
  useEffect(() => {
    function handleEscapekey(e) {
      if (e.key === "Escape") handler();
    }
    document.addEventListener("keydown", handleEscapekey);

    return () => document.removeEventListener("keydown", handleEscapekey);
  }, [handler]);
}
