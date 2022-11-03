import { ArrowSquareUpRight } from "phosphor-react"
import { LinkContainer } from "./styles"

interface LinkProps {
  href: string
}
export const Link = ({ href }: LinkProps) => {
  return (
    <LinkContainer href={href} target="_blank">
      github
      <ArrowSquareUpRight size={18} weight="bold" />
    </LinkContainer>
  )
}