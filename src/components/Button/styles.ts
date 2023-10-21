import styled, { css } from "styled-components";
import { ButtonProps } from "../../types/Button";

const buttonVariants = {
  small: css`
    width: 100px;
  `,
  medium: css`
    width: 150px;
  `,
  large: css`
    width: 200px;
  `,
};

export const Content = styled.button<Partial<ButtonProps>>`
  ${({ size }) => buttonVariants[size!] || buttonVariants.medium}

  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.button};
  border: none;
  font-size: ${({ theme }) => theme.font.size.md}em;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: red;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }

  transition: all 450ms;
`;
