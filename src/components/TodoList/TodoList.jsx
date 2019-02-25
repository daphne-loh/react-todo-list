import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export class TodoList extends Component {


  render() {
    return (
      <ul className="list-group">
        {this.props.data.map(item => (
          <TodoItem
            id={item.id}
            name={item.name}
            isCompleted={item.isCompleted}
            key={item.id}
            handleClick={this.props.handleClick}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
