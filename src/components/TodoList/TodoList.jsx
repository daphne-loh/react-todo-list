import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";

export class TodoList extends Component {
  state = {
    data: this.props.data
  };

  handleClick = (itemId) => {
    //find the item
    const {data} = this.state;
    const updatedState = data.map( item => {
      if(item.id === itemId){
        const brandNew = {...item}
        brandNew.isCompleted = !brandNew.isCompleted
        return brandNew
      }
      return item
    });

    this.setState({data: updatedState})
  }

  render() {
    return (
      <ul>
        {this.state.data.map(item => (
          <TodoItem
            id={item.id}
            name={item.name}
            isCompleted={item.isCompleted}
            key={item.id}
            handleClick={this.handleClick}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
