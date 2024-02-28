import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Content from './components/Content'
import { UserProvider } from './context/userContext'
import MyThemeProvider from './context/ThemeContext'

function App() {

  return (
    <div id="app">
      <UserProvider>
        <MyThemeProvider>
          <Header/>
          <NavBar/>
          <Content/>
        </MyThemeProvider>
      </UserProvider>
    </div>
  )
}

export default App
