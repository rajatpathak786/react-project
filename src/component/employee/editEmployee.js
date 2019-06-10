import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { editEmployeeEmp, appMenu, employeeDetails } from '../../actions/employee'
import { store } from '../../store'
import TextField from '@material-ui/core/TextField';
//import FormControl from '@material-ui/core/FormControl';
import { toast } from 'react-toastify';
import { getEmpDetails, getEmpName, getEmpEmail, getEmpDetailsId } from '../../selectors/selectors'

class EditEmployee extends Component {
  
  handleChange(event) {
    store.dispatch(editEmployeeEmp({[event.target.name] : event.target.value}));
  }

  editEmployee(event) {
    event.preventDefault();
    let name = getEmpDetailsId()[0].name
    let email = getEmpDetailsId()[0].email
    // console.log('5556666');
    // console.log(store.getState())
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (!(typeof getEmpDetails()[0].items == 'undefined')) {
      toast.warn('Files not editted');
    } else if (!(typeof getEmpName() == 'undefined')) {
      name = getEmpName();
    } else if (!(typeof getEmpEmail() == 'undefined')) {
      email = getEmpEmail()
    }
    if (name === '' || !(regex.test(email))) {
      toast.warn(' All Fields are mandatory & email address mush be proper');
    } else {
      axios.post('http://127.0.0.9:4566/employeeUpdate/', {
        id: this.props.match.params.empId,
        name: name,
        email: email
      }).then((response) => {
        // console.dir(store.getState())
        toast.success('Details inserted into Database Successfully!!!');
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  getEmpDetails() {
    axios.get('http://127.0.0.9:4566/employeeFetchId/', {
      params: {
        id: this.props.match.params.empId
      }
    })
    .then(async(response) => {
      // console.log('response')
      // console.log(typeof response.data.result.resultResponse);
      // console.log(response.data.result.resultResponse);
      // console.log(store.getState())
      store.dispatch(employeeDetails({ items : response.data.result.resultResponse}));
      // this.setState({items: response.data.result.resultResponse})
      // console.log('1111111')
      // console.log(store.getState())
      // console.log(store.getState().list[0].items.length)
    }).catch((error) => {
      console.log(error);
    });  
  }

   initialFunction() {
    store.dispatch(appMenu({menu: false}))
    // console.log(name,email,id)
    // if (!(typeof store.getState().items == "undefined")) {
    //   console.log('88888888')
    //   console.log(name,email,id)
    //   name = store.getState().items.name;
    //   email = store.getState().items.email
    //   id = store.getState().items.empId
    //   console.log(name,email,id)
    // }
  }

  componentDidMount() {
    this.getEmpDetails();
  }

  componentWillMount () {
    // console.log('=========================', this.props)
    this.initialFunction();
  }

  // value = {store.getState().edit[0].items.name}
  render() {
    // console.log('3323232323>>>>>>>>>>')
    // console.log(this.props.match.params.empId)
    // console.log(getEmpDetails(),getEmpName(),getEmpEmail(),getEmpDetailsId())
    let name, email;
    // console.log('2');
    // console.log(store.getState())
    // console.log(store.getState())
    if (!(typeof getEmpDetails() == 'undefined')) {
      if (!(typeof getEmpName() == 'undefined')) {
        name = getEmpName()
      } else {
        name = getEmpDetailsId()[0].name
      } 
      if (!(typeof getEmpEmail() == 'undefined')) {
        email = getEmpEmail()
      } else {
        email = getEmpDetailsId()[0].email
      }
    } else {
      name = ''
      email = ''
    }
    
    
    // if (!(typeof store.getState().edit == "undefined")) {
    //   console.log(name, email)
    //   console.log(store.getState().edit[0].items);
    // if (typeof store.getState().edit[0].items == "undefined") {
    //   name = store.getState().edit[0].name;
    //   email = store.getState().edit[0].email;
    //   } else { 
    //     name = store.getState().edit[0].items.name;
    //     email = store.getState().edit[0].items.email;
    //   }  
    // } else {
    //   name = this.props.location.state.name;
    //   email = this.props.location.state.email
    // }
    // console.log('mmmmmmmmmmssssssssssssssssssssssssss')
    // console.log(name,email)
    return (
      <div>
        <form id = "editEmp" onSubmit = {this.editEmployee.bind(this)} >
          {/* <p>Name: <input type = "Text" name = "name" value = {name} onChange = {value => this.handleChange(value.target)} /></p> */}
          <p>
            <TextField
              name="name"
              value={name} 
              onChange = {this.handleChange}
              label="Name"
              margin="normal"
            />
          </p>
          {/* <p>E-Mail: <input type = "Text" name = "email" value = {email} onChange = {value => this.handleChange(value.target)} /></p> */}
          <p>
            <TextField
              name="email"  
              value={email}
              onChange = {this.handleChange}
              label="E-Mail"
              margin="normal"
            />
          </p>
          <p>  
            <Button variant = "contained" color = "primary" type = "Submit" style={{right: '-48px'}}>
            Submit
            </Button>
          </p>
        </form> 
      </div>
    )    
  }
}
export default EditEmployee;