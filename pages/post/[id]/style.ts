import styled from "styled-components";
import theme from "../../../theme";

export const Container = styled.div`
  padding-bottom: 20px;

  color: ${theme.text.color3};
  div {
    margin-top: 20px;
  }
  h3,
  h2,
  h4 {
    color: ${theme.colors.primary};
  }
  table {
  }
  @media screen and (max-width: 600px) {
    
    table {
      font-size: 12px;
    }
  }
`;

export const AuthorContainer = styled.div`
  margin-top: 20px;
  position: relative;
  button {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const PostContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 20px;
  }
`;
