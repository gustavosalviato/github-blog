import { Link } from '../../../../components/Link'
import { Icon, IconContainer, PostInfoContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Post } from '../../../Blog'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../../../../components/Spinner'
interface PostInfo {
  post: Post
  isLoading: boolean
}

export const PostInfo = ({ post, isLoading }: PostInfo) => {

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <PostInfoContainer>
      {isLoading ? <Spinner /> : (
        <>
          <header>
            <Link
              as="button"
              text="voltar"
              variant="iconLeft"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              onClick={goBack}
            />

            <Link text="ver no gihub"
              href={post.html_url}
              target='_blank'
            />
          </header>

          <strong>{post.title}</strong>

          <IconContainer>
            <Icon>
              <FontAwesomeIcon icon={faGithub} />
              <span>{post.user?.login}</span>
            </Icon>

            <Icon>
              <FontAwesomeIcon icon={faCalendar} />
              <span>{formatDistanceToNow(new Date(post?.created_at), { locale: ptBR, addSuffix: true })}</span>
            </Icon>

            <Icon>
              <FontAwesomeIcon icon={faComment} />
              <span>{post.comments}</span>
            </Icon>
          </IconContainer>
        </>)}
    </PostInfoContainer>
  )
}
