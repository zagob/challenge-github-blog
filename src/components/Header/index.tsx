import { HeaderContainer, ImageLeft, ImageRight } from "./styles";

import logoSvg from "../../assets/logo.svg";

import effectLeft from "../../assets/effectLeft.svg";
import effectRight from "../../assets/effectRight.svg";

import ellipseLeft from "../../assets/EllipseLeft.svg";
import ellipseRight from "../../assets/EllipseRight.svg";

export function Header() {
  return (
    <HeaderContainer>
      <ImageLeft>
        <img src={ellipseLeft} alt="" />
      </ImageLeft>
      <img src={effectLeft} alt="" />
      <img style={{ marginBottom: "4rem" }} src={logoSvg} alt="" />
      <img src={effectRight} alt="" />
      <ImageRight>
        <img src={ellipseRight} alt="" />
      </ImageRight>
    </HeaderContainer>
  );
}
