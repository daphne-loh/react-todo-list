import React from "react";

function TodoCreationBar({handleSubmit, handleChange, value}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Create task..."
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TodoCreationBar;
