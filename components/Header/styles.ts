import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  background-color: ${theme.colors.secondary};
  margin-bottom: 20px;
  > div {
    img {
      margin-right: 30px;
    }
    padding: 1rem 0;
    display: flex;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  ul {
    float: right;
    list-style: none;
    li {
      display: inline;
    }
    li + li {
      margin-left: 30px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;
