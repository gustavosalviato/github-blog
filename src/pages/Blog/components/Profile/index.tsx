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
import { UserInfo } from '../..'
import { Spinner } from '../../../../components/Spinner'

interface ProfileProps {
  user: UserInfo
  isLoading: boolean
}
export const Profile = ({ user, isLoading }: ProfileProps) => {
  return (
    <ProfileContainer>
      {isLoading ? <Spinner /> : (
        <>
          <Avatar
            src={user?.avatar_url}
            alt=""
          />

          <ProfileInfo>
            <ProfileHeader>
              <strong>{user.name}</strong>
              <Link text="github" href="https://github.com/gustavosalviato" />
            </ProfileHeader>

            <ProfileText>
              {user.bio}
            </ProfileText>

            <IconsContainer>
              <Icon>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user.login}</span>
              </Icon>

              <Icon>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{user.company}</span>
              </Icon>

              <Icon>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user.followers}</span>
              </Icon>
            </IconsContainer>
          </ProfileInfo>
        </>
      )}

    </ProfileContainer>
  )
}
