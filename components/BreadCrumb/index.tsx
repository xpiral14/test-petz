import React from "react";
import Link from "next/link";
import { Container } from "./styles";

// import { Container } from './styles';
interface BreadCrumb {
  label: string;
  link: string;
  asLink?: string;
}
interface BreadCrumbProps {
  links: BreadCrumb[];
}
const BreadCrumb: React.FC<BreadCrumbProps> = ({ links }) => {
  return (
    <Container>
      {links.map((link) => (
        <span key={link.link}>
          <Link href={link.link} as={link.asLink}>
            <a>{link.label}</a>
          </Link>
          &nbsp; &nbsp;/ &nbsp;&nbsp;
        </span>
      ))}
    </Container>
  );
};

export default BreadCrumb;
