import React, {Component} from "react";
import TDI from './ToDoItems.module.css'
import FlipMove from 'react-flip-move';

class ToDoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                   key={item.key}>{item.text}</li>
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className={TDI.theList}>
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
};
export default ToDoItems;