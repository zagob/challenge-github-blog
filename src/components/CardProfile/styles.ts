import styled from "styled-components";

export const ContainerCardProfile = styled.header`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.baseProfile};
  margin-top: -7rem;
  border-radius: 8px;
  padding: 2rem;
  gap: 1rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    background-size: auto;
    background-clip: border-box;
    background: #000;
  }
`;

export const ContentCardProfile = styled.div`
  z-index: 10;
  flex: 1;
  background: ${(props) => props.theme.baseProfile};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 24px;
  }

  a {
    text-decoration: none;
    display: flex;
    gap: 0.7rem;
    color: ${(props) => props.theme.blue};
    font-size: 12px;
    text-transform: uppercase;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid transparent;

    &:hover {
      transition: 0.2s;
      cursor: pointer;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const ContentDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 25.6px;
  color: ${(props) => props.theme.baseText};
`;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    svg {
      color: ${(props) => props.theme.baseLabel};
      width: 18px;
      height: 18px;
    }
  }
`;
