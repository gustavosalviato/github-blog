import { Post } from '../../../Blog'
import { TextContent } from './styles'

interface PostContentProps {
  post: Post
}

export const PostContent = ({ post }: PostContentProps) => {
  return (
    <TextContent>
      {post.body} 
    </TextContent>
  )
}
