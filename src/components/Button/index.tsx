import { ButtonProps } from "../../types/Button";
import { Content } from "./styles";

export default function Button({
  text,
  size,
  isLoading,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <Content onClick={onClick} size={size} disabled={disabled}>
      {isLoading ? <>loading</> : text}
    </Content>
  );
}
