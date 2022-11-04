import styled, { css } from 'styled-components'

interface LinkContainerProps {
  variant?: 'iconLeft'
}

export const LinkContainer = styled.a<LinkContainerProps>`
  background: none;
  border: none;
  color: ${(props) => props.theme.blue};
  font-size: 1.2rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 700;
  transition: 0.4s;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }

  ${(props) =>
    props.variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`
