import {
  ContainerCardProfile,
  ContentCardProfile,
  ContentDescription,
  ContentHeader,
  ContentInfo,
} from "./styles";

import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub, FaUserFriends, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";

interface UserProfileProps {
  avatar_url: string;
  name: string;
  followers: number;
  login: string;
  html_url: string;
  bio: null;
}

export function CardProfile() {
  const [userProfile, setUserProfile] = useState({} as UserProfileProps);

  async function getUserProfile() {
    const response = await api.get("/users/diego3g");

    console.log(response.data);
    const { avatar_url, name, followers, login, html_url, bio } = response.data;
    setUserProfile({
      avatar_url,
      name,
      followers,
      login,
      html_url,
      bio,
    });
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <ContainerCardProfile>
      <img src={userProfile.avatar_url} alt="" />

      <ContentCardProfile>
        <ContentHeader>
          <h1>{userProfile.name}</h1>
          <a href={userProfile.html_url}>
            github
            <BsBoxArrowUpRight />
          </a>
        </ContentHeader>
        <ContentDescription>
          {userProfile.bio ? (
            userProfile.bio
          ) : (
            <span style={{ opacity: 0.4 }}>Nenhuma bio encontrada.</span>
          )}
        </ContentDescription>
        <ContentInfo>
          <div>
            <FaGithub />
            <span>{userProfile.login}</span>
          </div>
          <div>
            <FaUserFriends />
            <span>{userProfile.followers} seguidores</span>
          </div>
        </ContentInfo>
      </ContentCardProfile>
    </ContainerCardProfile>
  );
}
