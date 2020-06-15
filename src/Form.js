import React, { Component } from 'react'
import "./Form.css"
import { v4 as uuidv4 } from 'uuid';
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",
            quantity: 1,
            cost: ""
        }
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleOnSubmit(e) {
        e.preventDefault();
        let itemObject = {...this.state, id: uuidv4(), isCompleted: false};
        this.props.addItem(itemObject);
        this.setState({ item: "",
        quantity: 1,
        cost: ""})
    }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return(
            <div className="Form container">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <form onSubmit={this.handleOnSubmit}>
                            <div className="form-group">
                                <label htmlFor="item">Item</label>
                                <input type="text" className="form-control" id="item" aria-describedby="item" name="item" value={this.state.item} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cost">Cost ($)</label>
                                <input type="number" className="form-control" id="cost" aria-describedby="cost" name="cost" value={this.state.cost} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity</label>
                                <select className="form-control" id="quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange}>
                                    <option defaultValue value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </form>
                    </div>
                </div>     
            </div>
        )
    }
}

export default Form;