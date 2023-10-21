import ReactPortal from "../ReactPortal";

import Spinner from "../Spinner";

import { LoaderProps } from "../../types/Loader";

import { Overlay } from "./styles";
import useAnimatiedEnd from "../../hooks/useAnimationEnd";

export default function Loader({ isLoading }: LoaderProps) {
  const { shouldRender, animatedElementRef } = useAnimatiedEnd(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={120} color="#16DB65" />
      </Overlay>
    </ReactPortal>
  );
}
