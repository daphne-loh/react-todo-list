import React from "react";

function TodoItem({ name, isCompleted }) {
  return (
    <div>
      <li>{name}</li>
    </div>
  );
}

export default TodoItem;
