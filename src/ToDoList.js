import React, {Component} from "react";

import ToDoItems from './ToDoItems';
import TDL from './ToDoList.module.css';


class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        var itemArray = this.state.items;
        if (this._inputElement.value!== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
            this.setState({
                items: itemArray
            });
            this._inputElement.value = "";
        }
        console.log(itemArray);
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key!== key);
        });
        this.setState({
            items: filteredItems
    });
    }

    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input className={TDL.input} ref={(a) => this._inputElement = a}
                               placeholder="Новая заметка">
                        </input>
                        <button className={TDL.button} type="submit">ok</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items}
                            delete={this.deleteItem} />
            </div>
        );
    };
}
export default ToDoList;