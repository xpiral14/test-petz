import { FC } from "react";
import ReactMarkdown from 'react-markdown';
import { Container } from "./styles";
interface HomeProps {
  text: string
}
const Home: FC<HomeProps> = ({text}) => {
  return (
    <Container>
      <div>Pagina inicial</div>
      <ReactMarkdown source = {text} />
    </Container>
  );
};
export default Home;
