import { ReactComponent as Loading } from "../../assets/components/loader.svg";

import { SpinnerProps } from "../../types/Spinner";
import { StyledSpinner } from "./styles";

export default function Spinner({ size, color }: SpinnerProps) {
  return (
    <StyledSpinner>
      <Loading width={size} height={size} fill={color} />
    </StyledSpinner>
  );
}
