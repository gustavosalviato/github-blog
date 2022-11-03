import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { DefaultContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <DefaultContainer>
      <Header />
      <Outlet />
    </DefaultContainer>
  )
}
