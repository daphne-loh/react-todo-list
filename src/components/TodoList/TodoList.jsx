import React from 'react'
import TodoItem from "../TodoItem/TodoItem";

export function TodoList({ data, handleClick}) {
  
  return (
    <ul className="list-group">
      {data.map(item => (
        <TodoItem
          id={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
          key={item.id}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default TodoList