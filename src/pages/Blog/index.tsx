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

const username = import.meta.env.VITE_GITHUB_USER
const repoName = import.meta.env.VITE_REPO_NAME

export const Blog = () => {



  // const fetchIssues = useCallback(async (query = '') => {
  //   try {
  //     setIsLoading(true)
  //     const response = await api.get(`/search/issues?q=${query}%label:published%20repo:${username}/${repoName}`)
  //     console.log(response.data)  
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   fetchUserData()
  //   // fetchIssues()
  // }, [])


  return (
    <BlogContainer>
      <Profile/>
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
