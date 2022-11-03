import { InputContainer, InputHeader, StyledInput } from "./styles"

export const InputSearch = () => {
  return (
    <InputContainer>
      <InputHeader>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </InputHeader>

      <StyledInput type="text" placeholder="Buscar conteúdo" />
    </InputContainer>
  )
}