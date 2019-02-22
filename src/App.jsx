import React, { Component } from "react";
import { todos } from "./seedData";
import { TodoList } from "./components/TodoList/TodoList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <TodoList data={todos}/>
      </React.Fragment>
    );
  }
}

export default App;
