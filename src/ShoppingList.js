import React, { Component } from 'react'
import Form from "./Form";
import Item from "./Item"
import "./ShoppingList.css"
class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this)
        this.completeTask = this.completeTask.bind(this)
    }
    addItem(itemObject) {
        this.setState((currentState) => {
            return {items: [...currentState.items, itemObject]}
        })
    }
    updateItem(id, newQuantity) {
        let updatedItems = this.state.items.map(item => {
            if(item.id === id) {
                let completeStatus = false;
                if(item.quantity === newQuantity) {
                    completeStatus = true;
                }
                return {...item, quantity: newQuantity, isCompleted: completeStatus}
            } else {
                return item;
            }
        })
        this.setState({items: updatedItems})
    }
    removeItem(id) {
        let newItems = this.state.items.filter((item) => {
            return item.id !== id;
        })
        this.setState({items: newItems})
    }
    completeTask(id) {
        let newItems = this.state.items.map(item => {
            if(item.id === id) {
                return {...item, isCompleted: !item.isCompleted}
            } else {
                return item;
            }
        })
        this.setState({items: newItems})
    }
    render() {
        let items = this.state.items.map((item) => {
            return (
                <Item 
                    quantity = {item.quantity}
                    item = {item.item}
                    cost = {item.cost}
                    id = {item.id}
                    key = {item.id}
                    isCompleted = {item.isCompleted}
                    removeItem = {this.removeItem}
                    updateItem = {this.updateItem}
                    completeTask = {this.completeTask}
                />
            )
        })
        return(
            <div className="ShoppingList">
                <h1 className="text-center mb-5">Shopping Notebook</h1>
                <div className="row">
                    <div className="col-3">
                        <Form 
                            addItem = {this.addItem} 
                        />
                    </div>
                    <div className="col-8 List">
                        {items}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingList;