import React from "react";

function TodoItem({ id, name, isCompleted, handleClick }) {
  const getStyleCompleted = (value) => {
    return value  && "line-through" 
  }
  return (
    <div>
      <li style={{"textDecoration" : getStyleCompleted(isCompleted) }} onClick={() => handleClick(id)}>{name}</li>
    </div>
  );
}

export default TodoItem;
