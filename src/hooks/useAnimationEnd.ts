import { useState, useRef, useEffect } from "react";

export default function useAnimatiedEnd(visible: boolean) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animatedElementRef: any = useRef(null);
  const overlayRefElement = animatedElementRef.current;

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }
    function handleAnimatedEnd() {
      setShouldRender(false);
    }
    if (!visible && overlayRefElement) {
      overlayRefElement.addEventListener("animationend", handleAnimatedEnd);
    }

    return () => {
      if (overlayRefElement) {
        overlayRefElement.removeEventListener(
          "animationend",
          handleAnimatedEnd
        );
      }
    };
  }, [visible]);

  return { shouldRender, animatedElementRef };
}
