import React, { Component } from "react";
import ToDoList from "./components/TodoList/TodoList";


class App extends Component {


    render() {

        return (
            <div>
                <h1>Todo List</h1>
                <ToDoList />
            </div>
        );
    }
}

export default App;
