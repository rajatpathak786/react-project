import React, { Component } from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { employeeDetails } from '../actions/employee'
import { store } from '../store'

class ListDetails extends Component {
  // constuctor(props) {
  //   this.state = {
  //     items: {}
  //   }
  // }
  listDetails() {
    axios.get('http://127.0.0.9:4566/employeeDetails/')
    .then(async(response) => {
      console.log('response')
      console.log(typeof response.data.result.resultResponse);
      console.log(response.data.result.resultResponse);
      console.log(store.getState())
      store.dispatch(employeeDetails({ items : response.data.result.resultResponse}));
      // this.setState({items: response.data.result.resultResponse})
      console.log('1111111')
      console.log(store.getState())
    }).catch((error) => {
      console.log(error);
    });  
  }

  render() {
    // console.log(this.state.items)
    let details = () => {
      let id = 0;
      let arr = []
      let noOfItems = 0;
      console.log('2222222222222222222222222222')
      console.log(store.getState()) 
      if (!(typeof store.getState() == "undefined")) {
        for (noOfItems; noOfItems < store.getState().items.length; ++noOfItems) {
          id = id + 1;
          arr.push({id: id, empId: store.getState().items[noOfItems].id, name: store.getState().items[noOfItems].name, email: store.getState().items[noOfItems].email})
        }
      }
      return arr 
    }
    return (
      <div>
        <h1>Details of Employees</h1>
        <Button variant="contained" color="primary" type = "Submit" onClick = {this.listDetails.bind(this)}>
          Submit
        </Button>
        <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">Emp Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">E-Mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details().map(row => (
            <TableRow key = {row.id}>
              <TableCell allign = "center">{row.empId}</TableCell>
              <TableCell allign = "center">{row.name}</TableCell>
              <TableCell allign = "center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody> 
      </Table>     
      </div>
    )    
  }
   
}    

export default ListDetails;


