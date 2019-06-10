import React, {Component} from 'react';
import axios from 'axios';
import { store } from '../../store';
import  { taskDetails, appMenu }  from '../../actions/employee'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { getTaskDetails } from '../../selectors/selectors'
//import EditEmpl from './editEmployee';

class ListTasks extends Component {

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount () {
    this.initialFunction();
  }

  deleteTasks(row) {
    console.log('row');
    console.log(row);
    axios.get('http://127.0.0.9:4566/taskDelete/', {  
      params: {
        id: row.taskId
      }
    }).then((response) => {
      console.log(response)
      this.taskDetails();
    }).catch((error) => {
      console.log(error)
    })
  }

  // editTask (row) {
  //   console.log('hello')
  //   console.log(row)
  //   store.dispatch(editTasks({ items : row}));
  //   console.log('121212121212121212121');
  //   console.log(store.getState());
  // }

  taskDetails() {
    axios.get('http://127.0.0.9:4566/taskDetails/')
    .then(async(response) => {
      console.log('response')
      console.log(typeof response.data.result.resultResponse);
      console.log(response.data.result.resultResponse);
      console.log(store.getState())
      store.dispatch(taskDetails({ items : response.data.result.resultResponse}));
      // this.setState({items: response.data.result.resultResponse})
      console.log('1111111')
      console.log(store.getState())
    }).catch((error) => {
      console.log(error);
    });  
  }

  componentDidMount () {
    this.taskDetails();
  }

  render() {
    console.log('1212121212121212121212');
    console.log(getTaskDetails())
    let details = () => {
      let id = 0;
      let arr = []
      let noOfItems = 0;
      console.log('2222222222222222222222222222')
      console.log(store.getState()) 
      // if (!(typeof store.getState() == "undefined")) {
        if (!(typeof getTaskDetails() == "undefined")) {
          for (noOfItems; noOfItems < getTaskDetails()[0].items.length; ++noOfItems) {
            id = id + 1;
            console.log(arr)
            arr.push({id: id, taskId: getTaskDetails()[0].items[noOfItems].id, taskName: getTaskDetails()[0].items[noOfItems].taskname})
            console.log('arr')
            console.log(arr)
          }
        }
     // }
      console.log('final')
      console.log(arr)
      return arr 
    }
    return (
      <div >
        <h1>Details of Tasks</h1>
        {/* <Button variant="contained" color="primary" type = "Submit" onClick = {this.listDetails}>
          Submit
        </Button> */}
        <Table >
        <TableHead>
          <TableRow>
            <TableCell align="center">Task Id</TableCell>
            <TableCell align="center">Task Name</TableCell>
            <TableCell align="center">Task Edit</TableCell>
            <TableCell align="center">Task Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details().map((row) => (
            <TableRow key = {row.id} >
              <TableCell allign = "center">{row.taskId}</TableCell>
              <TableCell allign = "center">{row.taskName}</TableCell>
              <TableCell allign = "center ">
                <Button variant = "contained"><Link to = {{pathname:`/edit_task/${row.taskId}`}}>edit</Link></Button>
                  {/* <button onClick = {this.editEmp(row)}>edit</button> */}
                  {/* <button>
                    <Router>
                    onClick = {() => {this.editTask(row)}}
                      <Link to = "/edit_emp">edit</Link>
                      <Route path = "/edit_emp" exact render = {() => (<EditEmpl  data = {row}/>)}/>
                    </Router>
                  </button> */}
              </TableCell>
              <TableCell allign = "center">  
                <Button variant="contained" onClick = {() => {this.deleteTasks(row)}}><Link>delete</Link></Button>    
              </TableCell> 
            </TableRow>
          ))}
        </TableBody> 
      </Table>     
      </div>
    )    
  }   
}

export default ListTasks;
