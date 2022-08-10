import styled from "styled-components";

export const ContainerHome = styled.div``;

export const ContentMain = styled.main`
  position: absolute;
  left: -50%;
  right: -50%;
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  z-index: 99;

  padding-bottom: 5rem;
`;

export const Publications = styled.section`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
