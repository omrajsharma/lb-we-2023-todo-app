import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TodoList = ({apiResonseData, fetchTodos, deleteTodo}) => {

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
