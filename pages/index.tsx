import { FC } from "react";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

import api from "../config/api";
import Table from "../components/Table";
import { GetStaticProps, GetServerSideProps } from "next";
import Post from "../@types/models/Post";

interface HomeProps {
  posts: Post[];
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <div>Pagina inicial</div>
  );
};

export default Home;
