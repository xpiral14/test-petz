import { GetServerSideProps } from "next";
import Post from "../../../@types/models/Post";

import PostDetailPage from "../../../containers/post/[id]";
import User from "../../../@types/models/User";
import api from "../../../config/api";
import Comment from "../../../@types/models/Comment";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let post: Post = null;
  let user: User = null;
  try {
    const responsePost = await api.get<Post>(`/posts/${ctx.params.id}`);
    post = responsePost.data;

    const responseUser = await api.get<User>(`/users/${post.userId}`);
    user = responseUser.data;

    const responseComment = await api.get<Comment[]>(
      `/posts/${ctx.params.id}/comments`
    );
    post.comments = responseComment.data;
  } catch (error) {}
  return {
    props: { post, user },
  };
};

export default PostDetailPage;
