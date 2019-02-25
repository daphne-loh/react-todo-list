import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export class TodoList extends Component {


  render() {
    const {searchTerm, data} = this.props
    return (
      <ul className="list-group">
        {data.filter(item => item.name.includes(searchTerm)).map(item => (
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
