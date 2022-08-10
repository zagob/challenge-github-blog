import styled from "styled-components";

export const ContainerSearch = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.baseSubtitle};
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.baseSpan};
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.baseBorder};
  background: ${(props) => props.theme.baseInput};
  color: #fff;

  ::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }
`;
