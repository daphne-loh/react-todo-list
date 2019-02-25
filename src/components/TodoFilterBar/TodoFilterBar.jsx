import React from "react";

function TodoFilterBar({ handleChange, filterBarValue }) {
  return (
    <form>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          value={filterBarValue}
          onChange={handleChange}
          placeholder="Search tasks..."
        />
      </div>
    </form>
  );
}

export default TodoFilterBar;
