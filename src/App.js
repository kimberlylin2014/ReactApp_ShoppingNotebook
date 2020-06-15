import React, { Component } from 'react'
import './App.css';
import ShoppingList from "./ShoppingList"

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12">  
                 <ShoppingList />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
