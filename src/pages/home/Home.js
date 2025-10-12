import React from 'react'
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import RightPane from '../../components/RightPane/RightPane'
import "./home.css"

export default function Home({ setCurrentPage }) {
  return (
    <div className='bottomContainer'>
      <LeftPane setCurrentPage={setCurrentPage}></LeftPane>
      <PostPane></PostPane>
      <RightPane></RightPane>
    </div>
  )
}
