import { Post } from '../..'
import { PostCardContainer, PostHeader, PostText } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
interface PostCardProps {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  const distanceDate = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <PostCardContainer to={`/post/23`}>
      <PostHeader>
        <strong>{post.title}</strong>
        <span>{distanceDate}</span>
      </PostHeader>

      <PostText>
        {post.body}
      </PostText>
    </PostCardContainer >

  )
}
