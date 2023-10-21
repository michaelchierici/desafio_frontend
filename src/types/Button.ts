type btnType = JSX.IntrinsicElements["button"];
export interface ButtonProps extends btnType {
  text: string;
  size: "small" | "medium" | "large";
  isLoading: boolean;
  disabled: boolean;
  onClick: () => void;
}
