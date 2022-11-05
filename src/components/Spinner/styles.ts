import styled, { css } from "styled-components";

interface SpinnerContainer {
  marginTop: 'default'
}
export const SpinnerContainer = styled.div<SpinnerContainer >`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  ${props => props.marginTop === "default" && css`
    margin-top: 6.4rem;
  `}
`

