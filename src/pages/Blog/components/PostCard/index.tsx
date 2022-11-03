import { PostCardContainer, PostHeader, PostText } from './styles'

export const PostCard = () => (
  <PostCardContainer>
    <PostHeader>
      <strong>JavaScript data types and data structures</strong>
      <span>há 1 dia</span>
    </PostHeader>

    <PostText>
      Programming languages all have built-in data structures, but these often
      differ from one language to another. This article attempts to list the
      built-in data structures available in JavaScript and what properties they
      have. These can be used to build other data structures. Wherever possible,
      comparisons with other languages are drawn.
    </PostText>
  </PostCardContainer>
)
