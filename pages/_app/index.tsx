import Header from "../../components/Header";
import GlobalStyle from "../../styles/GlobalStyle";
import { Container, Content } from "./style";

function MyApp({ Component, pageProps }) {
  return (
    <Content>
      <GlobalStyle />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Content>
  );
}

export default MyApp;
