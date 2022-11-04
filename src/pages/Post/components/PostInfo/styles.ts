import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 3.2rem 4rem;
  border-radius: 6px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};
  margin-top: -7rem;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 2.4rem;
    line-height: 1.3;
  }
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`

export const Icon = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  color: ${(props) => props.theme['base-span']};

  svg {
    color: ${(props) => props.theme['base-span']};
  }
`
