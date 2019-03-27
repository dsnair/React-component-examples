import React from 'react'

import LoginPage from './components/LoginPage'
import PostPage from './components/PostPage'
import './App.css'

const App = () => {
  return localStorage.getItem('username') ? <PostPage /> : <LoginPage />
}

export default App
