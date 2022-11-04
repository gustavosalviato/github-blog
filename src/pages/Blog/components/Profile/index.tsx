import {
  ProfileContainer,
  Avatar,
  ProfileInfo,
  ProfileHeader,
  ProfileText,
  IconsContainer,
  Icon,
} from './styles'

import { Link } from '../../../../components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar
        src="https://avatars.githubusercontent.com/u/75762976?v=4"
        alt=""
      />

      <ProfileInfo>
        <ProfileHeader>
          <strong>Cameron Williamson</strong>
          <Link href="https/github.com/gustavosalviato" />
        </ProfileHeader>

        <ProfileText>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileText>

        <IconsContainer>
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
            <span>gustavosalvito</span>
          </Icon>

          <Icon>
            <FontAwesomeIcon icon={faBuilding} />
            <span>gustavosalvito</span>
          </Icon>

          <Icon>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>gustavosalvito</span>
          </Icon>
        </IconsContainer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
