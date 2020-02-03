import React from 'react'
import ToDoList from "../TodoList/TodoList"

class ToDoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isCompleted: this.props.isCompleted ? "strikethrough": ""
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.isCompleted === "strikethrough"){
            this.setState({isCompleted:""});
        }
        else {
            this.setState({isCompleted:"strikethrough"});
        }

    }

    render() {
        return (
            <div>
                <h1 className={this.state.isCompleted} onClick={this.handleClick}>{this.props.name}</h1>
            </div>

        );

    }

}

export default ToDoItem;
