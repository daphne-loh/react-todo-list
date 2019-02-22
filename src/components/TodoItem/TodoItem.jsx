import React from "react";

function TodoItem({ id, name, isCompleted, handleClick }) {
  
  return (
    <div>
      <li onClick={() => handleClick(id)}>{name}</li>
    </div>
  );
}

export default TodoItem;
