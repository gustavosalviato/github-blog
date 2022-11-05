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
import { Spinner } from '../../../../components/Spinner'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/api'

const username = import.meta.env.VITE_GITHUB_USER

export interface UserInfo {
  name: string
  followers: number
  bio: string
  company: string
  login: string
  avatar_url: string
}

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo)

  const fetchUserData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setUserInfo(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [userInfo])

  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Avatar src={userInfo.avatar_url} alt="" />

          <ProfileInfo>
            <ProfileHeader>
              <strong>{userInfo.name}</strong>
              <Link text="github" href="https://github.com/gustavosalviato" />
            </ProfileHeader>

            <ProfileText>{userInfo.bio}</ProfileText>

            <IconsContainer>
              <Icon>
                <FontAwesomeIcon icon={faGithub} />
                <span>{userInfo.login}</span>
              </Icon>

              <Icon>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{userInfo.company}</span>
              </Icon>

              <Icon>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{userInfo.followers}</span>
              </Icon>
            </IconsContainer>
          </ProfileInfo>
        </>
      )}
    </ProfileContainer>
  )
}
