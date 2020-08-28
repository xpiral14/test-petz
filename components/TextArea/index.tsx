import styled from "styled-components";
import theme from "../../theme";

const TextArea = styled.textarea`
  resize: none;
  border-radius: 8px;
  border: 2px solid ${theme.colors.primary};
  padding: 8px 16px;
`;

export default TextArea;