import { ProfileContainer, Avatar, ProfileInfo, ProfileHeader, ProfileText, IconsContainer, Icon } from "./styles"
import { GithubLogo, Buildings, Users } from 'phosphor-react'
import { Link } from "../../../../components/Link"

export const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar src="https://avatars.githubusercontent.com/u/75762976?v=4" alt="" />


      <ProfileInfo>
        <ProfileHeader>
          <strong>Cameron Williamson</strong>
          <Link href="https/github.com/gustavosalviato" />
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