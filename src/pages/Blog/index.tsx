import { InputSearch } from "./components/InputSearch"
import { PostCard } from "./components/PostCard"
import { Profile } from "./components/Profile"
import { BlogContainer, Grid } from "./styles"

export const Blog = () => {
  return (
    <BlogContainer>
      <Profile />

      <InputSearch />

      <Grid>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </Grid>
    </BlogContainer>
  )
}