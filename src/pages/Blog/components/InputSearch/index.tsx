import { useState, useEffect, FormEvent } from 'react'
import { InputContainer, InputHeader, StyledInput } from './styles'
interface InputSearchProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}
export const InputSearch = ({ postsLength, getPosts }: InputSearchProps) => {
  const [search, setSearch] = useState('')

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault()
    await getPosts(search)
  }

  return (
    <InputContainer onSubmit={handleSubmitForm}>
      <InputHeader>
        <strong>Publicações</strong>
        <span>{postsLength} publicações</span>
      </InputHeader>

      <StyledInput
        type="text"
        placeholder="Buscar conteúdo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputContainer>
  )
}
