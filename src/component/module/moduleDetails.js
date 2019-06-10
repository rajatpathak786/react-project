import React, {Component} from 'react';
import axios from 'axios';
import { store } from '../../store';
import  { moduleDetails, appMenu }  from '../../actions/employee'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { getModuleDetails } from '../../selectors/selectors';
//import EditEmpl from './editEmployee';

class ListModules extends Component {

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount () {
    this.initialFunction();
  }

  // editModule(row) {
  //   console.log(row)
  //   console.log(row)
  //   store.dispatch(taskSelect({ items : row}));
  // }

  deleteModule(row) {
    console.log(row)
    axios.get('http://127.0.0.9:4566/moduleDelete/', {
      params: {
        id: row.moduleId
      }
    })
    .then((response) => {
      console.log(response)
      this.moduleDetails();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  moduleDetails() {
    axios.get('http://127.0.0.9:4566/moduleDetails/')
    .then((response) => {
      // console.log(store.getState())
      store.dispatch(moduleDetails({ items : response.data.result.resultResponse}));
      // console.log('1111111')
      // console.log(store.getState())
    }).catch((error) => {
      console.log(error);
    });  
  }

  componentDidMount () {
    this.moduleDetails();
  }

  render() {
    // console.log('12121213545464654654564');
    console.log(getModuleDetails())
    let details = () => {
      let id = 0;
      let arr = [];
      console.log('2222222222222222222222222222')
      // console.log(store.getState()) 
      // if (!(typeof store.getState() == "undefined")) {
        if (!(typeof getModuleDetails() == "undefined")) {
          for (let noOfItems = 0; noOfItems < getModuleDetails()[0].items.length; ++noOfItems) {
            let taskId;
            id = id + 1;
            // console.log(id)
            // console.log('array task');
            // console.log(noOfItems)
            // console.log(store.getState())
            if (getModuleDetails()[0].items[noOfItems].taskId) {
              taskId = getModuleDetails()[0].items[noOfItems].taskId[0]
              // console.log(taskId)
              for (let i = 1; i < getModuleDetails()[0].items[noOfItems].taskId.length; ++i) {
              taskId = `${taskId},${getModuleDetails()[0].items[noOfItems].taskId[i]}`
              // console.log(taskId)
              }
            } 
            // console.log(arr);
            arr.push({id: id, moduleId: getModuleDetails()[0].items[noOfItems].id, moduleName: getModuleDetails()[0].items[noOfItems].moduleName, taskId: taskId})
            // console.log('arr')
            // console.log(arr);
          }
          console.log('araaaaaayyyyyyyy');
          // console.log(arr);
        }
      //}
      return arr 
    }
    return (
      <div >
        <h1>Details of Module</h1>
        {/* <Button variant="contained" color="primary" type = "Submit" onClick = {this.listDetails}>
          Submit
        </Button> */}
        <Table >
        <TableHead>
          <TableRow>
            <TableCell>Module Id</TableCell>
            <TableCell>Module Name</TableCell>
            <TableCell>Task Id</TableCell>
            <TableCell>Edit Module</TableCell>
            <TableCell>Delete Module</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details().map((row) => {
            console.log('rrrrrrooroooooowwwwww');
            console.log(row);
            return  (           
              <TableRow key = {row.id} >
                <TableCell allign = "center">{row.moduleId}</TableCell>
                <TableCell allign = "center">{row.moduleName}</TableCell>
                <TableCell allign = "center">{row.taskId}</TableCell>
                <TableCell allign = "center">
                  <Button variant = "contained" ><Link to = {{pathname: `/edit_module/${row.moduleId}`}}>edit</Link></Button>
                </TableCell>
                <TableCell allign = "center">
                  <Button variant = "contained" onClick = {() => {this.deleteModule(row)}}><Link>delete</Link></Button>
                </TableCell>
                {/* <TableCell allign = "center">
                  <button onClick = {() => {this.editTask(row)}}><Link to = "/edit_task">edit</Link></button> */}
                    {/* <button onClick = {this.editEmp(row)}>edit</button> */}
                    {/* <button>
                      <Router>
                        <Link to = "/edit_emp">edit</Link>
                        <Route path = "/edit_emp" exact render = {() => (<EditEmpl  data = {row}/>)}/>
                      </Router>
                    </button> */}
                {/* </TableCell> */}
                {/* <TableCell allign = "center">  
                  <button onClick = {() => {this.deleteTasks(row)}}><Link>delete</Link></button>    
                </TableCell>  */}
              </TableRow>
            )
          })}
        </TableBody> 
      </Table>     
      </div>
    )    
  }   
}

export default ListModules;
