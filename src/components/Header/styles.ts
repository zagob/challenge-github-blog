import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 296px;
  background: ${(props) => props.theme.baseProfile};
  position: relative;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageLeft = styled.div`
  position: absolute;
  left: 0;
`;

export const ImageRight = styled.div`
  position: absolute;
  right: 0;
`;
