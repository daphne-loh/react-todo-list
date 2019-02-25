import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export class TodoList extends Component {

  render() {
    const {searchTerm, data} = this.props
    const filtering = item => item.name.includes(searchTerm)
    return (
      <ul className="list-group">
        {data.filter(filtering).map(item => (
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
