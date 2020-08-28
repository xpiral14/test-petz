import Header from "../../components/Header";
import GlobalStyle from "../../styles/GlobalStyle";
import { Container, Content } from "./style";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Content>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Content>
  );
}

export default MyApp;
