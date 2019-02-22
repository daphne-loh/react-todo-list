import React from "react";
import "./TodoItem.css"

function TodoItem({ id, name, isCompleted, handleClick }) {

  return (
    <div>
      <li className={isCompleted ? "completed" : ""} onClick={() => handleClick(id)}>{name}</li>
    </div>
  );
}

export default TodoItem;
