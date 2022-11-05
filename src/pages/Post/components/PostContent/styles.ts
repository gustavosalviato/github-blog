import styled from 'styled-components'

export const TextContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 4rem;
  line-height: 1.6;
  margin-bottom: 12.8rem;
  padding: 4rem 3.2rem;

  a {
    color: ${(props) => props.theme.blue} !important;
  }
`
