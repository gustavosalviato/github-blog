import { Link } from '../../../../components/Link'
import { Icon, IconContainer, PostInfoContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export const PostInfo = () => {
  return (
    <PostInfoContainer>
      <header>
        <Link
          text="voltar"
          variant="iconLeft"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
        />
        <Link text="ver no gihub" />
      </header>

      <strong>JavaScript data types and data structures</strong>

      <IconContainer>
        <Icon>
          <FontAwesomeIcon icon={faGithub} />
          <span>gustavosalviato</span>
        </Icon>

        <Icon>
          <FontAwesomeIcon icon={faCalendar} />
          <span>gustavosalviato</span>
        </Icon>

        <Icon>
          <FontAwesomeIcon icon={faComment} />
          <span>gustavosalviato</span>
        </Icon>
      </IconContainer>
    </PostInfoContainer>
  )
}
