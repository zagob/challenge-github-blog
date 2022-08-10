import { ContainerSearch, InputSearch, Title } from "./styles";

export function SearchPublication() {
  return (
    <ContainerSearch>
      <Title>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </Title>
      <InputSearch type="text" placeholder="Buscar conteúdo" />
    </ContainerSearch>
  );
}
