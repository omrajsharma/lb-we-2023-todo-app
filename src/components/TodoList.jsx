import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TodoList = () => {
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
      { apiResonseData && (
        Object.keys(apiResonseData).map(key => {
            const {task, description, priority, date} = apiResonseData[key]
            return (
                <div className={'todo-item ' + priority} key={key}>
                    <div className="todo-item-left">
                        <h4>{task}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="todo-item-right">
                        <p>{date}</p>
                        <button onClick={() => deleteTodo(key)} className='delete-todo'>❌</button>
                    </div>
                </div>
            )
        })
      )}
    </div>
  )
}

export default TodoList
