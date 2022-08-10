import styled from "styled-components";

export const ContainerCardPost = styled.div`
  height: 168px;
  margin-top: -5rem;
  background: ${(props) => props.theme.baseProfile};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
`;

export const Header = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* a {
    border: 1px solid red;
    color: #fff;
    text-decoration: none;
  } */

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    gap: 0.3rem;
    border-bottom: 1px solid transparent;
    padding-bottom: 0.3rem;
    color: ${(props) => props.theme.blue};

    &:hover {
      transition: 0.2s;
      cursor: pointer;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.baseTitle};
  font-weight: 700;
`;

export const FooterCardPost = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.baseLabel};
      width: 18px;
      height: 18px;
    }
  }
`;
