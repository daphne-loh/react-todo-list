import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export class TodoList extends Component {
  state = {
    data: this.props.data
  };
  render() {
    return (
      <ul>
        {this.state.data.map(item => (
          <TodoItem
            name={item.name}
            isCompleted={item.isCompleted}
            key={item.id}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
