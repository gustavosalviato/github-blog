import { useCallback, useEffect, useInsertionEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/api'
import { InputSearch } from './components/InputSearch'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { BlogContainer, Grid } from './styles'
export interface UserInfo {
  name: string
  followers: number
  bio: string
  company: string
  login: string
  avatar_url: string
}

export const Blog = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userInfo, setUserInfo] = useState({} as UserInfo)

  const fetchUserData = useCallback(async () => {
    try {
      const response = await api.get(`/users/${import.meta.env.VITE_GITHUB_USER}`)
      setIsLoading(true)
      console.log(response.data)
      setUserInfo(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  console.log(userInfo?.avatar_url)

  return (
    <BlogContainer>
      <Profile user={userInfo} isLoading={isLoading} />
      <InputSearch />

      <Grid>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Grid>
    </BlogContainer>
  )
}
