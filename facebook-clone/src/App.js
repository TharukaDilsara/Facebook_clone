import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddPost from './components/AddPost/AddPost';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <Header />
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;