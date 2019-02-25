import React from "react";

function TodoFilterBar({ handleChange, value }) {
  return (
    <form>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search tasks..."
        />
      </div>
    </form>
  );
}

export default TodoFilterBar;
