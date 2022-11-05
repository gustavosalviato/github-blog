import { CircularProgress } from '@mui/material'
import { ComponentProps } from 'react'
import { SpinnerContainer } from './styles'

type SpinnerProps = ComponentProps<typeof SpinnerContainer> & {
  marginTop?: 'default'
}

export const Spinner = ({ ...props }: SpinnerProps) => {
  return (
    <SpinnerContainer {...props}>
      <CircularProgress size={50} />
    </SpinnerContainer>
  )
}