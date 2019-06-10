import React, { Component } from 'react'
import { appMenu, employeeDetails, moduleDetails, addEmployeeTraining, employeeTrainingDetails } from '../../actions/employee'
import { getEmpDetails, getModuleDetails, getModuleId, getEmpTrainingId, getEmpTrainingDetails } from '../../selectors/selectors'
import { store } from '../../store'
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios'

class EmpTrainingDetails extends Component {

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }
  
  componentWillMount() {
    this.initialFunction()
  }

  handleChange(event) {
    store.dispatch(addEmployeeTraining({ [event.target.name] : event.target.value }));
  }

  getEmpTrainingDetail(event) {
    event.preventDefault();
    axios.post('http://127.0.0.9:4566/trainingDetails/', {
      id: getEmpTrainingId(),
      moduleId: getModuleId()
    })
    .then((response) => {
      console.log(response.data.result.responseResult)
      store.dispatch(employeeTrainingDetails({ itemTraining: response.data.result.responseResult }));
    })
  }

  listDetails() {
    axios.get('http://127.0.0.9:4566/employeeDetails/')
    .then((response) => {
      // console.log('response')
      // console.log(typeof response.data.result.resultResponse);
      // console.log(response.data.result.resultResponse);
      // console.log(store.getState())
      axios.get('http://127.0.0.9:4566/moduleDetails/')
      .then(async(moduleDetail) => {
        // console.log(moduleDetail)
        await store.dispatch(employeeDetails({ items : response.data.result.resultResponse}));
        await store.dispatch(moduleDetails({ itemsmodule : moduleDetail.data.result.resultResponse}));
      })
    }).catch((error) => {
      console.log(error);
    });  
  }

  componentDidMount() {
    this.listDetails()
  }

  render () {
    console.log('4545454545454545454')
    console.log(store.getState())
    console.log(getEmpDetails(),getModuleDetails(), getEmpTrainingId(), getModuleId(), getEmpTrainingDetails())
    let Details = () => {
      let employee = [];
      // if (!(typeof store.getState() == "undefined")) {
        if (!(typeof getEmpDetails() == "undefined")) {
          for (let noOfItems = 0; noOfItems < getEmpDetails()[0].items.length; ++noOfItems) {
            let id = noOfItems + 1;
            employee.push({id: id, empId: getEmpDetails()[0].items[noOfItems].id, empName: getEmpDetails()[0].items[noOfItems].name})
          }
        }
        //}
        return employee 
      }
      
    let ModuleListDetails = () => {
      let moduleList = [];
      //if (!(typeof getModuleDetails() == "undefined")) {
        if(!(typeof getModuleDetails() == "undefined")) {
          for (let noOfItems = 0; noOfItems < getModuleDetails()[0].itemsmodule.length; ++noOfItems) {
            let id = noOfItems + 1;
            moduleList.push({id: id, moduleId: getModuleDetails()[0].itemsmodule[noOfItems].id, moduleName: store.getState().itemsmodule[noOfItems].moduleName})
          }  
        }
      //}
      // console.log(';;;;;;;')
      // console.log(moduleList)
      return moduleList;
    }   
    
    let EmployeeTrainingList = () => {
      let EmpTrainingDetails = {
        empTrainingList : [],
        noOfTasks : 0
      } 
      if(!(typeof getEmpTrainingDetails() == "undefined")) {
        for (let noOfItems = 0 ; noOfItems < getEmpTrainingDetails()[0].itemTraining.length; ++noOfItems) {
          let id = noOfItems + 1;
          let drift = getEmpTrainingDetails()[0].itemTraining[noOfItems].drift; 
          if (typeof getEmpTrainingDetails()[0].itemTraining[noOfItems].drift == 'object') {
            drift = 0
          }
          console.log(typeof getEmpTrainingDetails()[0].itemTraining[noOfItems].drift, getEmpTrainingDetails()[0].itemTraining[noOfItems].drift, '000000000000000000000');
          EmpTrainingDetails.empTrainingList.push({id: id, empId: getEmpTrainingDetails()[0].itemTraining[noOfItems].empId, reviewerId: getEmpTrainingDetails()[0].itemTraining[noOfItems].reviewerId, dos: getEmpTrainingDetails()[0].itemTraining[noOfItems].dos, doc: getEmpTrainingDetails()[0].itemTraining[noOfItems].doc, expdoc: getEmpTrainingDetails()[0].itemTraining[noOfItems].expdoc, taskStatus: getEmpTrainingDetails()[0].itemTraining[noOfItems].taskStatus, drift: drift, moduleId: getEmpTrainingDetails()[0].itemTraining[noOfItems].moduleId, taskId: getEmpTrainingDetails()[0].itemTraining[noOfItems].taskId})
          EmpTrainingDetails.noOfTasks = id;
        }
      }
      console.log('asdasdasdasdasdasd544444444444444');
      console.log(EmpTrainingDetails)
      return EmpTrainingDetails;
    }
    return (
      <div>
      <h2>Training Detail Component</h2>
      <form id="empTraining" onSubmit={this.getEmpTrainingDetail.bind(this)}>
        <InputLabel style={{right: '-35px'}}>
          Employee Name:   
        </InputLabel>  
        <Select 
          name="empId"
          value={getEmpTrainingId()}
          onChange={this.handleChange.bind(this)}
          style={{right: '-35px'}}
          >
          {Details().map((row) => (
            <MenuItem key={row.id} value = {row.empId} >
              {row.empName}
            </MenuItem>
          ))}
        </Select>
        <p></p>
        <InputLabel style={{right: '-60px'}}>
          Module Name:   
        </InputLabel> 
          
        <Select className = "moduleId"
          name="moduleId"
          value={getModuleId()}
          onChange={this.handleChange.bind(this)}
          style={{right: '-52px'}} 
          >
          {ModuleListDetails().map((row) => (
            <MenuItem key={row.id} value = {row.moduleId} >
              {row.moduleName}
            </MenuItem>
          ))}
        </Select>
        <p>   
        <Button 
          variant="contained" 
          color="primary" 
          type = "Submit"
          style={{right:'-550px'}}
        >
        Submit
        </Button>
        </p>
      </form>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Emp Id</TableCell>
            <TableCell>Reviewer Id</TableCell>
            <TableCell>Date of Start</TableCell>
            <TableCell>Date of Completion</TableCell>
            <TableCell>Expected Date of Completion</TableCell>
            <TableCell>Task Status</TableCell>
            <TableCell>Drift</TableCell>
            <TableCell>Module Id</TableCell>
            <TableCell>Task Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {EmployeeTrainingList().empTrainingList.map((row) => {
            console.log('rrrrrrooroooooowwwwww');
            console.log(row);
            console.log(EmployeeTrainingList().noOfTasks);
            return  (           
              <TableRow key = {row.id} >
                <TableCell allign = "center">{row.empId}</TableCell>
                <TableCell allign = "center">{row.reviewerId}</TableCell>
                <TableCell allign = "center">{row.dos}</TableCell>
                <TableCell allign = "center">{row.doc}</TableCell>
                <TableCell allign = "center">{row.expdoc}</TableCell>
                <TableCell allign = "center">{row.taskStatus}</TableCell>
                <TableCell allign = "center"><Link to = {{pathname: `/add_drift/${row.empId}/${row.taskId}/${row.moduleId}/${EmployeeTrainingList().noOfTasks - row.id}`}}>{row.drift}</Link></TableCell>
                <TableCell allign = "center">{row.moduleId}</TableCell>
                <TableCell allign = "center">{row.taskId}</TableCell>
                {/* <TableCell allign = "center">
                  <Button variant = "contained" ><Link to = {{pathname: `/edit_module/${row.moduleId}`}}>edit</Link></Button>
                </TableCell>
                <TableCell allign = "center">
                  <Button variant = "contained" onClick = {() => {this.deleteModule(row)}}><Link>delete</Link></Button>
                </TableCell> */}
              </TableRow>
            )
          })}
        </TableBody> 
      </Table>
      </div> 
    )
  }    
}
export default EmpTrainingDetails
