import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { editEmployee } from '../actions/employee'
import { store } from '../store'

class EditEmployee extends Component {

  handleChange(event) {
    store.dispatch(editEmployee({ [event.target.name] : event.target.value}));
  }

  editEmployee(event) {
    event.preventDefault();
    if (store.getState().name == '' || store.getState().email == '' || store.getState().id == '' ) {
      alert('All Fields are mandatory');
    } else {
      axios.post('http://127.0.0.9:4566/employeeUpdate/', {
        id: store.getState().id,
        name: store.getState().name,
        email: store.getState().email
      }).then((response) => {
        console.dir(store.getState())
        document.getElementById('editEmp').reset();
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  render() {
    return(
      <div>
        <form id = "editEmp" onSubmit = {this.editEmployee.bind(this)} >
          <p>Emp Id: <input type = "Number" name = "id" onChange = {this.handleChange} /></p>
          <p>Name: <input type = "Text" name = "name" onChange = {this.handleChange} /></p>
          <p>E-Mail: <input type = "Text" name = "email" onChange = {this.handleChange} /></p>
          <Button variant = "contained" color = "primary" type = "Submit">
          Submit
          </Button>
        </form> 
      </div>
    )    
  }
}
export default EditEmployee;