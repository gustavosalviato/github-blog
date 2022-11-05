import { useCallback, useEffect, useInsertionEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/api'
import { InputSearch } from './components/InputSearch'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { BlogContainer, Grid } from './styles'

const username = import.meta.env.VITE_GITHUB_USER
const repoName = import.meta.env.VITE_REPO_NAME

export interface Post {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}
export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const postsLength = posts.length

  const fetchIssues = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`)
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [posts])

  useEffect(() => {
    fetchIssues()
  }, [])


  return (
    <BlogContainer>
      <Profile />
      <InputSearch postsLength={postsLength} getPosts={fetchIssues} />

      {isLoading ? <Spinner marginTop='default' /> :
        <Grid>
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
      }
    </BlogContainer>
  )
}
