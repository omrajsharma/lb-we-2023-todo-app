import React from 'react'
import Header from './components/Header'
import CreateTodo from './components/CreateTodo'
import { Container } from '@mui/material'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Container sx={{paddingTop: '100px'}}>
        <CreateTodo />
        <TodoList />
      </Container>
    </div>
  )
}

export default App
