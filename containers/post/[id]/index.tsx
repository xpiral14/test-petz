import { FC } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import api from "../../../config/api";
import Post from "../../../@types/models/Post";
import { Container, AuthorContainer, PostContainer } from "./style";
import User from "../../../@types/models/User";
import BreadCrumb from "../../../components/BreadCrumb";
import Comment from "../../../@types/models/Comment";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
interface PostInfoProps {
  post: Post;
  user: User;
}
const PostInfo: FC<PostInfoProps> = ({ post, user }) => {
  const router = useRouter();

  const deletePost = async () => {
    try {
      await api.delete(`posts/${post.id}`);
      alert("Post deletado com sucesso!")
      router.push("/post");
    } catch (error) {
      alert("erro ao deletar post");
    }
  };
  return (
    <Container>
      <BreadCrumb
        links={[
          { label: "Home", link: "/" },
          { label: "Posts", link: "/post" },
          {
            label: "Detalher do post",
            link: "/post/[id]",
            asLink: `/post/${post.id}`,
          },
        ]}
      />
      <AuthorContainer>
        <h2>Informações do autor</h2>
        <p>
          <strong>Nome:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Telefone:</strong> {user.phone}
        </p>

        <Button color = "danger" onClick={deletePost}>Deletar Post</Button>
      </AuthorContainer>

      <PostContainer>
        <h2>Informações do Post</h2>

        <h3>Título do post</h3>
        <p>{post.title}</p>

        <h3>Conteúdo do post</h3>
        <p>{post.body}</p>

        {post?.comments && (
          <div>
            <h3>Comentários</h3>
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Corpo do comentário</th>
                </tr>
              </thead>
              <tbody>
                {post.comments.map((comment) => (
                  <tr key = {comment.id}>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </PostContainer>
    </Container>
  );
};

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

export default PostInfo;
