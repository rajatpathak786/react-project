import React, { Component } from 'react'
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import App from '../App';
import { Link } from 'react-router-dom'
//import EditEmpl from './editEmployee';
import { employeeDetails, appMenu } from '../../actions/employee'
import { store } from '../../store'
//import DeleteEmp from '../sevices/deleteEmployee'
import Button from '@material-ui/core/Button';
import { getEmpDetails } from '../../selectors/selectors'

class ListDetails extends Component {
  // constuctor(props) {
  //   this.state = {
  //     items: {}
  //   }
  // }

  deleteEmp(row) {
    // console.log('row');
    // console.log(row);
    axios.get('http://127.0.0.9:4566/employeeDelete/', {  
      params: {
        id: row.empId
      }
    }).then((response) => {
      console.log(response)
      this.listDetails();
    }).catch((error) => {
      console.log(error)
    })
  }

  listDetails() {
    axios.get('http://127.0.0.9:4566/employeeDetails/')
    .then(async(response) => {
      // console.log('response')
      // console.log(typeof response.data.result.resultResponse);
      // console.log(response.data.result.resultResponse);
      // console.log(store.getState())
      store.dispatch(employeeDetails({ items : response.data.result.resultResponse}));
      // this.setState({items: response.data.result.resultResponse})
      // console.log('1111111')
      // console.log(store.getState())
    }).catch((error) => {
      console.log(error);
    });  
  }

  // editEmp (row) {
  //   console.log('hello')
  //   console.log(row)
  //   store.dispatch(editEmployee({ items : row}));
  //   console.log(store.getState());
  // }

  componentDidMount () {
    this.listDetails();
  }

  //  editEmp (row) {
  //   console.log('hello');
  //   console.log(row);
  //   console.log(typeof row);
  //   store.dispatch(editEmployee({ items : row}))
  //   console.log(store.getState())
  //   console.log('1');
  // }
  
  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount () {
    this.initialFunction();
  }

  render() {
    console.log(getEmpDetails());
    // console.log(this.state.items)
    let details = () => {
      let id = 0;
      let arr = []
      let noOfItems = 0;
      // console.log(store.getState()) 
      // if (!(typeof store.getState() == "undefined")) {
        if (!(typeof getEmpDetails() == "undefined")) {
          for (noOfItems; noOfItems < getEmpDetails()[0].items.length; ++noOfItems) {
            id = id + 1;
            arr.push({id: id, empId: getEmpDetails()[0].items[noOfItems].id, name: getEmpDetails()[0].items[noOfItems].name, email: getEmpDetails()[0].items[noOfItems].email})
          }
        }
      return arr 
    }
    return (
      <div className='employeeTable'>
        <h1>Details of Employees</h1>
        {/* <Button variant="contained" color="primary" type = "Submit" onClick = {this.listDetails}>
          Submit
        </Button> */}
        <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">Emp Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">E-Mail</TableCell>
            <TableCell align="center">Edit Employee</TableCell>
            <TableCell align="center">Delete Employee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details().map((row) => (
            <TableRow key = {row.id} >
              <TableCell allign = "center">{row.empId}</TableCell>
              <TableCell allign = "center">{row.name}</TableCell>
              <TableCell allign = "center">{row.email}</TableCell>
              <TableCell allign = "center">
              {/* , state :{id: row.id, name: row.name, email: row.email} */}
              {/* onClick = {() => {this.editEmp(row)}} */}
                <Button variant="contained" ><Link to = {{pathname: `/edit_emp/${row.empId}`}}>edit</Link></Button>
                {/* <Button variant="contained" color="primary" type = "Submit" style={{right:'-57px'}}>
                  Submit
                </Button>   */}
                  {/* <button onClick = {this.editEmp(row)}>edit</button> */}
                  {/* <button>
                    <Router>
                      <Link to = "/edit_emp">edit</Link>
                      <Route path = "/edit_emp" exact render = {() => (<EditEmpl  data = {row}/>)}/>
                    </Router>
                  </button> */}
              </TableCell>
              <TableCell allign = "center">  
                <Button variant="contained" onClick = {() => {this.deleteEmp(row)}}><Link>delete</Link></Button>    
              </TableCell> 
            </TableRow>
          ))}
        </TableBody> 
      </Table>     
      </div>
    )    
  } 
}    


export default ListDetails;


