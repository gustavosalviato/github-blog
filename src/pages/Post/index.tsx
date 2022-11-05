import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './components/styles'
import { useState, useCallback, useEffect } from 'react'
import { Post as IPost } from '../Blog'
import { api } from '../../lib/api'
import { useParams } from 'react-router-dom'

const username = import.meta.env.VITE_GITHUB_USER
const repoName = import.meta.env.VITE_REPO_NAME

export const Post = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [post, setPost] = useState<IPost>({} as IPost)
  const { id } = useParams()

  const fetchIssues = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`repos/${username}/${repoName}/issues/${id}`)
      setPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [post])

  useEffect(() => {
    fetchIssues()
  }, [])


  return (
    <PostContainer>
      <PostInfo post={post} isLoading={isLoading} />
      <PostContent post={post} />
    </PostContainer>
  )
}


