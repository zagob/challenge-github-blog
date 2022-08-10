import { ContainerHome, ContentMain, Publications } from "./styles";

import { CardProfile } from "../../components/CardProfile";
import { SearchPublication } from "../../components/SearchPublication";
import { CardPublication } from "../../components/CardPublication";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";

interface PostsProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  async function getPosts() {
    const response = await api.get("/search/issues?q=rocketseat-education");

    setPosts(response.data.items);
    console.log(response);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ContainerHome>
      <ContentMain>
        <CardProfile />
        <SearchPublication />

        <Publications>
          {posts.map((post) => (
            <CardPublication
              key={post.id}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
            />
          ))}
        </Publications>
      </ContentMain>
    </ContainerHome>
  );
}
