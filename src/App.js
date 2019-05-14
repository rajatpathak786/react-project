import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddEmployee from './component/addEmployee'
import EditEmployee from './component/editEmployee'

function Home() {
  return <h2>You are on Home Page</h2>
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <label><Link to = "/">Home</Link></label>
            <label><Link to = "/addEmp">AddEmployee</Link></label>
            <label><Link to = "/editEmp">EditEmployee</Link></label>      
          </nav>
          <Route path = "/" exact component = {Home} />
          <Route path = "/addEmp" exact component = {AddEmployee} />
          <Route path = "/editEmp" exact component = {EditEmployee} />
        </div>  
      </Router>
    );
  }
}

export default App;
