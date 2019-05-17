import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import axios from 'axios';
import { createEmployee } from '../actions/employee'
import { store } from '../store'
=======
import Grid from '@material-ui/core/Grid';
>>>>>>> b5dc14ac1a479dfb76b727856f1ea6b315604f4c

class AddEmployee extends Component {
  handleChange(event) {
    store.dispatch(createEmployee({ [event.target.name] : event.target.value}));
  }

  async addEmployee(event) {
    event.preventDefault();
    if (store.getState().name == '' || store.getState().email == '') {
      alert('All Fields are mandatory');
    } else {
      axios.post('http://127.0.0.9:4566/employee/', {
        name: store.getState().name,
        email: store.getState().email
      }).then((response) => {
        console.log('state after change');
        console.dir(store.getState())
        console.log(store.getState())
        document.getElementById('addEmp').reset();
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
    
  }
  render() {
    return (
<<<<<<< HEAD
        <div>
          <form id = 'addEmp' onSubmit={this.addEmployee.bind(this)}>
            <p>Name: <input type= "text" name="name"  onChange={ this.handleChange}/></p>
            <p>E-Mail: <input type= "text" name="email"  onChange={this.handleChange}/></p>
          <Button variant="contained" color="primary" type = "Submit">
            Submit
          </Button>
          </form>

        </div>
=======
      <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}>
        <div>
          <form id = 'addEmp'>
            <p>Name: <input type = "Text" id = "name"/></p>
            <p>E-Mail: <input type = "Text" id = "email"/></p>
          </form>
          <Button variant="contained" color="primary">
            <input type = "Submit" />
          </Button>
        </div>
      </Grid>
>>>>>>> b5dc14ac1a479dfb76b727856f1ea6b315604f4c
    )
  }
}

export default AddEmployee;