import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
    </HeaderContainer>
  )
}
