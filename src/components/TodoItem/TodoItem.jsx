import React from "react";

function TodoItem({ id, name, isCompleted, handleClick }) {

  return (
    <div>
      <li style={{textDecoration : isCompleted && "line-through" }} onClick={() => handleClick(id)}>{name}</li>
    </div>
  );
}

export default TodoItem;
