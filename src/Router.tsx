import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Post } from './pages/Post'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes >
  )
}