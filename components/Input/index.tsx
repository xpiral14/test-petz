import styled from "styled-components";
import theme from "../../theme";

const Input = styled.input`
  padding: 8px 16px;

  border: 2px solid ${theme.colors.primary};
  border-radius: 8px;
  background-color: #fff;
  :disabled{
      opacity: .5;
  }
`;

export default Input;
