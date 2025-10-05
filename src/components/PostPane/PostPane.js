import React from 'react'
import "./postPane.css"
import AddPost from '../AddPost/AddPost'
import PostList from '../PostList/PostList'

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPost></AddPost>
      <PostList></PostList>
    </div>
  )
}
