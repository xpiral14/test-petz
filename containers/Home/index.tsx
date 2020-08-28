import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "./styles";
import Head from "next/head";
interface HomeProps {
  text: string;
}
const Home: FC<HomeProps> = ({ text }) => {
  return (
    <Container>
      <Head>
        <title>Home - Teste Frontend Petz</title>
      </Head>
      <div>Pagina inicial</div>
      <ReactMarkdown source={text} />
    </Container>
  );
};
export default Home;
