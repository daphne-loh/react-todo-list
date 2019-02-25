import React from "react";
import "./TodoItem.css"

function TodoItem({ id, name, isCompleted, handleClick }) {

  return (
    <div>
      <li className={isCompleted ? "completed list-group-item" : "list-group-item"} onClick={() => handleClick(id)}>{name}</li>
    </div>
  );
}

export default TodoItem;
