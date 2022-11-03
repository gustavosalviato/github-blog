import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-top: 7.2rem;
`

export const InputHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 1.8rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 1.4rem;
  }
`

export const StyledInput = styled.input`
  margin-top: 1.2rem;
  width: 100%;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  padding: 1.2rem 1.6rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
