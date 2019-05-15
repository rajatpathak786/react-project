import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddEmployee from './component/addEmployee'
import EditEmployee from './component/editEmployee'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

function Home() {
  return <h2>You are on Home Page</h2>
}


class App extends Component {
  render() {
    return (
      <Router>
        <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}>
          <div>
            <nav>
              <Grid container justify = "center" spacing = {16}>
                <label><Link to = "/">Home</Link></label>
                <label><Link to = "/addEmp">AddEmployee</Link></label>
                <label><Link to = "/editEmp">EditEmployee</Link></label>
              </Grid>      
            </nav>
            <Route path = "/" exact component = {Home} />
            <Route path = "/addEmp" exact component = {AddEmployee} />
            <Route path = "/editEmp" exact component = {EditEmployee} />
          </div>  
        </Grid>
      </Router>
    );
  }
}

export default App;
