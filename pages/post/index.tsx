import { GetServerSideProps } from "next";

import PostPage from '../../containers/post'
import api from "../../config/api";


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await api.get("/posts");
  const posts = await res.data;

  return {
    props: {
      posts,
    },
  };
};

export default PostPage;
