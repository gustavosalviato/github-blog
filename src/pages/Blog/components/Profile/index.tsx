import { ProfileContainer, Avatar, ProfileInfo, ProfileHeader, ProfileText, IconsContainer, Icon } from "./styles"
import { NavLink } from 'react-router-dom'
import { ArrowSquareUpRight, GithubLogo, Buildings, Users } from 'phosphor-react'

export const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/75762976?v=4" alt="" />


      <ProfileInfo>
        <ProfileHeader>
          <strong>Cameron Williamson</strong>
          <NavLink to="https://github.com/gustavosalviato">github
            <ArrowSquareUpRight size={18} weight="bold" />
          </NavLink>
        </ProfileHeader>

        <ProfileText>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</ProfileText>

        <IconsContainer>
          <Icon>
            <GithubLogo size={18} weight="fill" />
            <span>gustavosalvito</span>
          </Icon>

          <Icon>
            <Buildings size={18} weight="fill" />
            <span>gustavosalvito</span>
          </Icon>

          <Icon>
            <Users size={18} weight="fill" />
            <span>gustavosalvito</span>
          </Icon>
        </IconsContainer>
      </ProfileInfo>
    </ProfileContainer>
  )
}