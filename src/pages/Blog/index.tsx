import { InputSearch } from "./components/InputSearch"
import { Profile } from "./components/Profile"
import { BlogContainer } from "./styles"

export const Blog = () => {
  return (
    <BlogContainer>
      <Profile />

      <InputSearch />
    </BlogContainer>
  )
}