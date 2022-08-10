import { ContainerCardPost, FooterCardPost, Header, Title } from "./styles";

import { FaCalendar, FaComment, FaChevronLeft, FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export function CardPost() {
  return (
    <ContainerCardPost>
      <Header>
        <Link to="/">
          <FaChevronLeft />
          voltar
        </Link>
        <a>
          ver no github
          <BsBoxArrowUpRight />
        </a>
      </Header>
      <Title>JavaScript data types and data structures</Title>
      <FooterCardPost>
        <span>
          <FaGithub />
          zagob
        </span>
        <span>
          <FaCalendar />
          Há 1 dia
        </span>
        <span>
          <FaComment />5 comentários
        </span>
      </FooterCardPost>
    </ContainerCardPost>
  );
}
