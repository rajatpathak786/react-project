import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { createEmployee, appMenu } from '../../actions/employee'
import { store } from '../../store'
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import { getEmpName, getEmpEmail } from '../../selectors/selectors'
import 'react-toastify/dist/ReactToastify.css';

class AddEmployee extends Component {
  handleChange(event) {
    store.dispatch(createEmployee({ [event.target.name] : event.target.value}));
  }

  addEmployee(event) {
    event.preventDefault();
    console.log(store.getState().email)
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (getEmpName() === '' || !(regex.test(getEmpEmail()))) {
      // alert('All Fields are mandatory & email address mush be proper');
      // toaster.notify('All Fields are mandatory & email address mush be proper', {
      //   duration: null
      // })
      toast.warn(' All Fields are mandatory & email address mush be proper');
    } else {
      axios.post('http://127.0.0.9:4566/employee/', {
        name: getEmpName(),
        email: getEmpEmail()
      }).then((response) => {
        console.log('state after change');
        console.dir(store.getState())
        console.log(store.getState())
        document.getElementById('addEmp').reset();
        toast.success('Details inserted into Database Successfully!!!')
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount () {
    this.initialFunction();
  }

  render() {
    console.log(store.getState())
    console.log(getEmpName(), getEmpEmail());
    return (
      <div>
        <form id = 'addEmp' onSubmit={this.addEmployee.bind(this)}>
          <p>
            <TextField  
              name="name"  
              onChange={this.handleChange}
              label="Name"
              margin="normal"
            />
          </p>
          <p> 
          <TextField
            name="email"  
            onChange={this.handleChange}
            label="Email"
            margin="normal"
          />
          </p>
            <Button variant="contained" color="primary" type = "Submit" style={{right:'-57px'}}>
              Submit
            </Button>  
        </form>
      </div>
    )
  }
}

export default AddEmployee;