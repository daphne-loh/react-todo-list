import React, { Component } from "react";
import { cloneDeep } from "lodash";
import { todos } from "./seedData";
import { TodoList } from "./components/TodoList/TodoList";
import TodoCreationBar from "./components/TodoCreationBar/TodoCreationBar";
import TodoFilterBar from "./components/TodoFilterBar/TodoFilterBar";

class App extends Component {
  state = {
    data: todos,
    inputBarValue: "",
    filterBarValue: ""
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

  handleCreateSubmit = event => {
    event.preventDefault();
    const { data, inputBarValue } = this.state;
    const copy = cloneDeep(data);
    copy.push({
      id: data.length + 1,
      name: inputBarValue,
      isCompleted: false
    });
    this.setState({ data: copy });
  };

  handleCreateChange = event => {
    this.setState({ inputBarValue: event.target.value });
  };

  handleSearchChange = event => {
    this.setState({filterBarValue: event.target.value})
  }


  render() {
    const { data, inputBarValue, filterBarValue } = this.state;

    return (
      <main className="container">
        <h1>Todo List</h1>
        <TodoCreationBar
          handleSubmit={this.handleCreateSubmit}
          handleChange={this.handleCreateChange}
          inputBarValue={inputBarValue}
        />
        <TodoFilterBar handleChange={this.handleSearchChange} filterBarValue={filterBarValue}/>
        <TodoList data={data} handleClick={this.handleClick} searchTerm={filterBarValue} />
      </main>
    );
  }
}

export default App;
