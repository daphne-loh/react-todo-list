import React from 'react'
import TodoItem from "../TodoItem/TodoItem";

export function TodoList({searchTerm, data, handleClick}) {
  const filtering = item => item.name.includes(searchTerm)

  return (
    <ul className="list-group">
      {data.filter(filtering).map(item => (
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