import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ReactNode } from 'react'
import { LinkContainer } from './styles'

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

export const Link = ({ text, icon, ...props }: LinkProps) => {
  return (
    <LinkContainer {...props}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
    </LinkContainer>
  )
}
