import styled from "styled-components";
import { darken } from "polished";
import theme from "../../theme";

interface ButtonProps{
  color: "success" | "danger" | "warning" | "info"
}
const buttonColorAttributes = {
  success: {
    background: theme.colors.success,
    color: theme.colors.light
  },
  warning: {
    background: theme.colors.warning,
    color: theme.colors.light
  },
  danger: {
    background: theme.colors.danger,
    color: theme.colors.light
  },
  info: {
    background: theme.colors.info,
    color: theme.colors.light
  },
}
const Button = styled.button<ButtonProps>`
  background: ${p => buttonColorAttributes[p.color].background};
  padding: 8px 16px;
  border-radius: 8px;
  color:  ${p => buttonColorAttributes[p.color].color};
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    background-color: ${ p => darken(0.05, buttonColorAttributes[p.color].background)};
  }
`;

export default Button;
