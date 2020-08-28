import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
