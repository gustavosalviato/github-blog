import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  padding: 3.2rem 4rem;
  border-radius: 6px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};
  margin-top: -7rem;
`
export const Avatar = styled.img`
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 8px;
`

export const ProfileInfo = styled.div``

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.3;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    height: 100%;
    list-style: none;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};

    font-weight: 700;
    line-height: 0;
    font-size: 1.2rem;
  }
`

export const ProfileText = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
  margin-top: 0.8rem;
`

export const IconsContainer = styled.div`
  display: flex;
  margin-top: 2.4rem;
  align-items: center;
  gap: 2.4rem;
`

export const Icon = styled.div`
  display: flex;
  color: ${(props) => props.theme['base-span']};
  align-items: center;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme['base-label']};
    width: 1.8rem;
    height: 1.8rem;
  }
`
