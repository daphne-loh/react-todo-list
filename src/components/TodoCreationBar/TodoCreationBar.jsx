import React from "react";

function TodoCreationBar({ handleSubmit, handleChange, inputBarValue }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          value={inputBarValue}
          onChange={handleChange}
          placeholder="Create task..."
        />
        <button className="btn btn-primary" type="submit" value="Submit" >Submit</button>
      </div>
    </form>
  );
}

export default TodoCreationBar;
