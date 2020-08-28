import { GetServerSideProps } from "next";
import fs from "fs";
import { promisify } from "util";
import Home from '../containers/Home'
import path from 'path'
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let file;
  try {
    file = await promisify(fs.readFile)(path.resolve('texts', 'HomePage.md'), "utf8");
  } catch (error) {}

  return {
    props: {
      text: file,
    },
  };
};
export default Home;
