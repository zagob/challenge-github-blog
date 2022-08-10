import styled from "styled-components";

export const ContainerCardPublication = styled.div`
  width: 416px;
  background: ${(props) => props.theme.basePost};
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.baseLabel};
    transition: 0.4s;
  }
`;

export const TitleText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.baseTitle};
    font-size: 20px;
    font-weight: 700;
    max-width: 283px;
  }

  span {
    font-size: 14px;
    color: ${(props) => props.theme.baseSpan};
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.baseText};
  font-size: 16px;
  font-weight: 400;
  line-height: 26.6px;
`;
