import { ContainerCardPublication, Description, TitleText } from "./styles";

interface CardPublicationProps {
  id?: string;
  title: string;
  body: string;
  created_at: string;
}

export function CardPublication({
  id,
  title,
  body,
  created_at,
}: CardPublicationProps) {
  return (
    <ContainerCardPublication>
      <TitleText>
        <h1>{title}</h1>
        <span>{created_at}</span>
      </TitleText>

      <Description>{body}</Description>
    </ContainerCardPublication>
  );
}
