import { FC } from "react";
import { Container } from "./styles";
import Link from "next/link";

const Header: FC = () => {
  return (
    <Container>
      <div>
        <img src="/images/logo-petz.png" width= "60px" alt=""/>
        <ul>
          <li>
            <Link href="/" as="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/post" as="/post">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
