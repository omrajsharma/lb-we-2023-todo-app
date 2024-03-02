import Header from './components/Header'
import CreateTodo from './components/CreateTodo'
import { Container } from '@mui/material'
import TodoList from './components/TodoList'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [apiResonseData, setApiResponseData] = useState();

  const fetchTodos = async () => {
      const response = await axios.get('https://lb-we-2023-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json')
      setApiResponseData(response.data);
  }
  useEffect(() => {fetchTodos()}, [])

  const deleteTodo = async (itemId) => {
      axios.delete('https://lb-we-2023-default-rtdb.asia-southeast1.firebasedatabase.app/todo/' + itemId + '.json')
      fetchTodos();
  }

  return (
    <div>
      <Header />
      <Container sx={{paddingTop: '100px'}}>
        <CreateTodo fetchTodos={fetchTodos} />
        <TodoList apiResonseData={apiResonseData} fetchTodos={fetchTodos} deleteTodo={deleteTodo} />
      </Container>
    </div>
  )
}

export default App
