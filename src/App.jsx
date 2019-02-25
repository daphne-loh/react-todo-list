import React, { Component } from "react";
import { cloneDeep } from "lodash";
import { todos } from "./seedData";
import { TodoList } from "./components/TodoList/TodoList";
import TodoCreationBar from "./components/TodoCreationBar/TodoCreationBar";

class App extends Component {
  state = {
    data: todos,
    inputBarValue: ""
  };

  handleClick = itemId => {
    const { data } = this.state;
    const updatedState = data.map(item => {
      if (item.id === itemId) {
        const brandNew = { ...item };
        brandNew.isCompleted = !brandNew.isCompleted;
        return brandNew;
      }
      return item;
    });

    this.setState({ data: updatedState });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {data, inputBarValue} = this.state;
    const copy = cloneDeep(data);
    copy.push({
      id: data.length + 1,
      name: inputBarValue,
      isCompleted: false
    });
    this.setState({data: copy})
  };

  handleChange = event => {
    this.setState({ inputBarValue: event.target.value });
  };

  render() {
    const { data, inputBarValue } = this.state;

    return (
      <main className="container">
        <h1>Todo List</h1>
        <TodoCreationBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputBarValue={inputBarValue}
        />
        <TodoList data={data} handleClick={this.handleClick} />
      </main>
    );
  }
}

export default App;
