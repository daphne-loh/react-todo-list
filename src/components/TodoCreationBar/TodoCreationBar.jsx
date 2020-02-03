import React from 'react'

class ToDoCreationBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newItem: null
        };

        this.getInputValue = this.getInputValue.bind(this);
        this.returnNewItem = this.returnNewItem.bind(this)

        console.log(this.props);

    }



    getInputValue(e){
        this.setState({newItem: e.target.value});
    }

    returnNewItem() {


    }

    render() {
        return (
            <div>
                <form>
                <input type="text" onChange={this.getInputValue}/>
                <button onClick={this.props.action(this.state.newItem)}>Add</button>
                </form>
            </div>

        );

    }

}

export default ToDoCreationBar;
