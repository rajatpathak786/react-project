import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { createEmployee } from '../actions/employee'
import { store } from '../store'

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
        <div>
          <form id = 'addEmp' onSubmit={this.addEmployee.bind(this)}>
            <p>Name: <input type= "text" name="name"  onChange={ this.handleChange}/></p>
            <p>E-Mail: <input type= "text" name="email"  onChange={this.handleChange}/></p>
          <Button variant="contained" color="primary" type = "Submit">
            Submit
          </Button>
          </form>

        </div>
    )
  }
}

export default AddEmployee;