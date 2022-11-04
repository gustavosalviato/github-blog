import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './components/styles'

export const Post = () => {
  return (
    <PostContainer>
      <PostInfo />
      <PostContent />
    </PostContainer>
  )
}
