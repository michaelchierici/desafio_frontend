import styled from "styled-components";

export const Input = styled.input`
  width: 280px;
  height: 3em;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.background};
  outline: none;

  padding: 0 10px;

  font-size: 0.85em;

  color: ${({ theme }) => theme.colors.text_secondary};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  display: inline-block;
  word-wrap: break-word;
  word-break: break-all;

  &::placeholder {
    color: #bcbcbc;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.text_primary};
  }
  transition: all 0.2s ease-in;
  border: 1px solid #b1b1b1;

  &[disabled] {
    opacity: 0.5;
    border-color: gray;
  }
`;
