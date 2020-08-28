import React, { useState, useEffect, useMemo } from "react";
import { Container, PostFilter } from "./style";
import Table from "../../components/Table";
import Post from "../../@types/models/Post";
import { FaInfoCircle, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";

import api from "../../config/api";
import BreadCrumb from "../../components/BreadCrumb";
import Input from "../../components/Input";
import User from "../../@types/models/User";
import Button from "../../components/Button";
import theme from "../../theme";
import { useRouter } from "next/router";
interface PostPageProps {
  posts: Post[];
}
const PostPage: React.FC<PostPageProps> = ({ posts }) => {
  const [authors, setAuthors] = useState<User[]>();

  //será usado para fazer as filtragens
  const [postState, setPostState] = useState<Post[]>(posts);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    async function getAuthors() {
      try {
        const response = await api.get("/users");
        setAuthors(response.data);
      } catch (error) {
        alert("Erro ao obter autores");
      }
    }
    getAuthors();
  }, []);

  // seleção de autores para o filtro
  const authorOptions = useMemo(() => {
    return authors?.map((author) => ({ label: author.name, id: author.id }));
  }, [authors]);
  const router = useRouter();

  const deletePost = (postId: number) => {
    
    return async () => {
      try {
        await api.delete(`posts/${postId}`);
        alert("Post deletado com sucesso!")
        router.push("/post");
      } catch (error) {
        alert("erro ao deletar post");
      }
    }
  };
  const onSubmit = async ({ title, user }) => {
    try {
      const response = await api.get<Post[]>(
        `/posts?${title && `title=${title}&`}${user && `userId=${user}&`}`
      );

      setPostState(response.data);
    } catch (error) {}
  };

  return (
    <Container>
      <BreadCrumb
        links={[
          { label: "Home", link: "/" },
          { label: "Posts", link: "/posts" },
        ]}
      />

      <PostFilter>
        <h3>Filtros</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input ref={register({})} name="title" placeholder="Título do post" />

          <select ref={register()} name="user">
            {authorOptions?.map((authorOption) => (
              <option key={authorOption.id} value={authorOption.id}>
                {authorOption.label}
              </option>
            ))}
          </select>
          <Button color="info" type="submit">
            Filtrar
          </Button>
        </form>
      </PostFilter>
      {!postState.length ? (
        <span>
          <strong>Posts não encontrados</strong>
        </span>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nome do post</th>
              <th>Conteúdo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {postState.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{`${post.body.slice(0, 120)}...`}</td>
                <td width={"200px"}>
                  <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                    <a>
                      <FaInfoCircle color={theme.colors.light} />
                    </a>
                  </Link>

                  <Button color="danger" onClick={deletePost(post.id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

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
