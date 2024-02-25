import React from 'react'
import Header from './components/Header'
import CreateTodo from './components/CreateTodo'
import { Container } from '@mui/material'

const App = () => {
  return (
    <div>
      <Header />
      <Container sx={{paddingTop: '60px'}}>
        <CreateTodo />
      </Container>
    </div>
  )
}

export default App
