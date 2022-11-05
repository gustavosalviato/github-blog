import { Post } from '../../../Blog'
import { TextContent } from './styles'
import ReactMarkDown from 'react-markdown'
interface PostContentProps {
  post: Post
}

export const PostContent = ({ post }: PostContentProps) => {
  return (
    <TextContent>
      <ReactMarkDown children={post.body}>
      </ReactMarkDown>
    </TextContent>
  )
}
