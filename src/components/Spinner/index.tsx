import { CircularProgress } from '@mui/material'
import { SpinnerContainer } from './styles'


export const Spinner = () => {
  return (
    <SpinnerContainer>
      <CircularProgress  size={50}/>
    </SpinnerContainer>
  )
}