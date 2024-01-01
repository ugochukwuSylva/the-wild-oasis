import { useEffect, useRef } from "react";

export function useOutsideClick(handler, handleCapturing = true) {
  const ref = useRef();

  // The useEffect function here handles the functionality of closing the modal when a click occurs outside of the modal window
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) return handler();
    }

    document.addEventListener("click", handleClick, handleCapturing);
    return () =>
      document.removeEventListener("click", handleClick, handleCapturing);
  }, [handler, handleCapturing]);

  return ref;
}
