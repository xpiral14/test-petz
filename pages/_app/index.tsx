import "../../styles/globals.css";
import Header from "../../components/Header";
import GlobalStyle from "../../theme/GlobalStyle";
import { Container, Content } from "./style";
import { Head } from "next/document";

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
