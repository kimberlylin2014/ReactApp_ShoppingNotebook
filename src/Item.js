import React, { Component } from 'react'
import "./Item.css"
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            quantity: this.props.quantity,
            isCompleted: this.props.isCompleted
        }
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleCompleteClick = this.handleCompleteClick.bind(this);
    }
    handleRemoveClick() {
        this.props.removeItem(this.props.id)
    }
    handleUpdateSubmit(e) {
        e.preventDefault()
        let newQuantity = this.state.quantity;
        this.props.updateItem(this.props.id, newQuantity)
        this.setState({isEditing: false})
    }
    handleToggleForm() {
        this.setState({isEditing: true})
    }
    handleChangeQuantity(e) {
        this.setState({
            quantity:  e.target.value
        })
    }
    handleCompleteClick(e) {
        this.props.completeTask(this.props.id, )
    }
    render() {
        let status = "incomplete-task";
        let checkValue = ""
        if(this.props.isCompleted) {
            status = "completed-task"
            checkValue = "checked"
        }
        let total = parseInt(this.props.quantity) * parseInt(this.props.cost);
        let result;
        if(this.state.isEditing) {
            result = (
                <form onSubmit={this.handleUpdateSubmit}>
                    <div className="row flex justify-content-around align-items-center" >
                        <p><span className="subtitle">Item:</span>  {this.props.item}</p>
                        <label htmlFor="editQuantity" className="subtitle align-self-center m-0">Quantity: </label>
                        <select id="editQuantity" name="editQuantity" onChange={this.handleChangeQuantity} value={this.state.quantity}>
                            <option value={this.state.quantity}>{this.state.quantity}</option>
                            <option disabled={true}>--</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <p><span className="subtitle">Cost:</span> ${this.props.cost}</p>    
                        <p><span className="subtitle">Total:</span> ${total}</p>        
                        <button className="edit-btn btn btn-dark">Update</button>
                    </div>
                </form>
            )
        } else {
            result = (
                <div className={`row flex justify-content-around align-items-center ${status}`}>
                    <input type="checkbox" checked={checkValue} onClick={this.handleCompleteClick}></input>
                    <p><span className="subtitle">Item:</span> {this.props.item}</p>
                    <p><span className="subtitle">Quantity:</span> {this.props.quantity}</p>
                    <p><span className="subtitle">Cost:</span> ${this.props.cost}</p>    
                    <p><span className="subtitle">Total:</span> ${total}</p> 
                    <div>
                        <button className="edit-btn btn btn-secondary mr-1" onClick={this.handleToggleForm}>Change Quantity</button>
                        <button className="delete-btn btn btn-secondary" onClick={this.handleRemoveClick} name="removeItem">X</button>
                    </div>       
                </div>
            )
        }
        return (
            <div className="Item">
                {result}
            </div>
        )
    }
}

export default Item;