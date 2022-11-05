import { Post } from '../..'
import { PostCardContainer, PostHeader, PostText } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {

  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <PostHeader>
        <strong>{post.title}</strong>
        <span>{formatDistanceToNow(new Date(post.created_at), { locale: ptBR, addSuffix: true })}</span>
      </PostHeader>

      <PostText>
        {post.body}
      </PostText>
    </PostCardContainer >

  )
}
