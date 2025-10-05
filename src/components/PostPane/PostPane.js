import React from 'react'
import "./postPane.css"
import AddPost from '../AddPost/AddPost'
import Stories from '../Stories/Stories'
import PostList from '../PostList/PostList'

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <AddPost></AddPost>
      <Stories></Stories>
      <PostList></PostList>
    </div>
  )
}
