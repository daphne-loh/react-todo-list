import React from "react";

function TodoItem({ id, name, isCompleted, handleClick }) {
  const getStyleCompleted = () => {
    return isCompleted  && "line-through" 
  }
  return (
    <div>
      <li style={{"textDecoration" : getStyleCompleted() }} onClick={() => handleClick(id)}>{name}</li>
    </div>
  );
}

export default TodoItem;
