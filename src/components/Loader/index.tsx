import ReactPortal from "../ReactPortal";

import Spinner from "../Spinner";

import { LoaderProps } from "../../types/Loader";

import { Overlay } from "./styles";
import useAnimatiedEnd from "../../hooks/useAnimationEnd";
import { useTheme } from "styled-components";

export default function Loader({ isLoading }: LoaderProps) {
  const theme = useTheme();
  const { shouldRender, animatedElementRef } = useAnimatiedEnd(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={120} color={theme.colors.text_primary} />
      </Overlay>
    </ReactPortal>
  );
}
