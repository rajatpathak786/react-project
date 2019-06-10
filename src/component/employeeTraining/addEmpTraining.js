import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { employeeDetails, addEmployeeTraining, moduleDetails, appMenu } from '../../actions/employee'
import { store } from '../../store'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
//import InputLabel from '@material-ui/core/InputLabel';
//import FormControl from '@material-ui/core/FormControl';
//import Grid from '@material-ui/core/Grid';
import { toast } from 'react-toastify'
//import { type } from 'os';
import { getEmpTrainingId, getReviewerId, getModuleId, getEmpDetails, getModuleDetails } from '../../selectors/selectors';

class AddEmpTraining extends Component {

  handleChange(event) {
    store.dispatch(addEmployeeTraining({ [event.target.name] : event.target.value}));
  }

  employeeTraining(event) {
    event.preventDefault();
    if (typeof getEmpTrainingId() == 'undefined' || typeof getReviewerId() == 'undefined' || typeof getModuleId() == 'undefined') {
      toast.warn('Module Name, Reviewer Name & Employee Name fields is mandatory ');
    } else {
      axios.post('http://127.0.0.9:4566/training/', {
      eid: getEmpTrainingId(),
      rid: getReviewerId(),
      moduleid: getModuleId(),
      taskstatus: 'not assigned'
      }).then((response) => {
        document.getElementById('empTraining').reset();
        toast.success('Details inserted into Database Successfully!!!');
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }  
  }

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
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

  componentWillMount () {
    this.initialFunction();
  }

  componentDidMount () {
    this.listDetails();
  }

  render () {
    console.log(getReviewerId(), getEmpTrainingId(), getModuleId(), getEmpDetails(), getModuleDetails());
  //  const { classes } = this.props;
    // console.log('&&&&*******(((()))))')
    // console.log(store.getState())
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
    return (
      <form id="empTraining" onSubmit={this.employeeTraining.bind(this)} >
          <p>Employee Name:   
            <Select className = "employeeName"
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
          </p>  
        <p>Reviewer Name:
        <Select className = "reviewerName"
          name="reviewerId"
          value={getReviewerId()}
          onChange={this.handleChange.bind(this)}
          style={{right:'-38px'}} 
        >
          {Details().map((row) => (
            <MenuItem key={row.id} value = {row.empId} >
              {row.empName}
            </MenuItem>
          ))}
        </Select>
        </p>
        <p>Module Name: 
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
        </p>     
          <Button 
            variant="contained" 
            color="primary" 
            type = "Submit"
            style={{right:'-52px'}}
          >
          Submit
          </Button>
      </form>
    )
  }  
}

export default AddEmpTraining;