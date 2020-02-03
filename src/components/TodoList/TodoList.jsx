import React from 'react'
import ToDoItem from '../TodoItem/TodoItem'
import todos from "../../seedData.js";
import ToDoCreationBar from "../TodoCreationBar/TodoCreationBar";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             list: todos,
        };

        this.updateItems = this.updateItems.bind(this);
    }

    updateItems(newItem) {
        let newList = this.state.list.splice();
        newList.push({name: newItem, isCompleted: false});
        this.setState({list: newList});
    }


    render() {
        return (
            <div>
            {this.state.list.map(listItem => (
            <ToDoItem name={listItem.name} isCompleted={listItem.isCompleted}/>
        ))}
        <ToDoCreationBar action={this.updateItems}/>
            </div>
        );

    }
}

export default ToDoList;
