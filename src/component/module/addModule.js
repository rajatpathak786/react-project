import React , { Component } from 'react'
import Button from '@material-ui/core/Button'
import { addModules, taskDetails, appMenu } from '../../actions/employee'
import { store } from '../../store'
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
//import FilledInput from '@material-ui/core/FilledInput';
import { toast } from 'react-toastify';
import { getModuleName, getTaskDetails } from '../../selectors/selectors'

class AddModule extends Component {

  state = {
    values: []
  }

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount () {
    this.initialFunction();
  }

  handleChange(event) {
    store.dispatch(addModules({ [event.target.name] : event.target.value}));
  }

  handleChangeTask(event) {
    this.setState({ values: [...event.target.value] })
  }

  addModule(event) {
    event.preventDefault();
    console.log((typeof getModuleName() === 'undefined' || getModuleName() === "") || (this.state.values.length === 0))
    if (((typeof getModuleName() === 'undefined' || getModuleName() === "") || (this.state.values.length === 0))) {
      toast.warn('Module Name field is mandatory & and you should select one or more than one tasks');
    } else {
      axios.post('http://127.0.0.9:4566/module/', {
      modulename: getModuleName(),
      taskId: this.state.values
      }).then((response) => {
        document.getElementById('addModule').reset();
        toast.success('Details inserted into Database Successfully!!!');
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  taskList() {
    axios.get('http://127.0.0.9:4566/taskDetails/')
    .then(async(response) => {
      console.log('response')
      console.log(typeof response.data.result.resultResponse);
      store.dispatch(taskDetails({ items : response.data.result.resultResponse}));
      // this.setState({items: response.data.result.resultResponse})
    }).catch((error) => {
      console.log(error);
    });  
  }

  componentDidMount () {
    this.taskList();
  }

  // onSubmit={this.addModule.bind(this)}
  // onChange={this.handleChange}
  render() {
    const {values} = this.state;
    // console.log(store.getState(),this.state)
    console.log(getModuleName(), getTaskDetails())
    let Details = () => {
      let id = 0;
      let arr = []
      let noOfItems = 0;
      // if (!(typeof store.getState() == "undefined")) {
      if (!(typeof getTaskDetails() == "undefined")) {
        for (noOfItems; noOfItems < getTaskDetails()[0].items.length; ++noOfItems) {
          id = id + 1;
          arr.push({id: id, taskId: getTaskDetails()[0].items[noOfItems].id, taskName: getTaskDetails()[0].items[noOfItems].taskname})
        }
      }
      //}
      return arr 
    }
    return (
      <div>
      <form id = 'addModule' onSubmit = {this.addModule.bind(this)}>
        {/* <p>Module Name: <input type= "text" name="name" className="moduleNameField" onChange = {this.handleChange}/></p> */}
        <p>
          <TextField
            name="name"  
            onChange = {this.handleChange}
            label="Module Name"
            margin="normal"
          />
        </p>
        <p>
          <Select
          multiple 
          value={values}
          onChange={this.handleChangeTask.bind(this)} 
          input={<Input id="select-multiple" />} 
          >
          {Details().map((row) => (
            <MenuItem key={row.id} value = {row.taskId} >
              {row.taskName}
            </MenuItem>
          ))}
          </Select>
        </p>
      <Button variant="contained" color="primary" type = "Submit" style={{right:'-60px'}}>
        Submit
      </Button>
      </form>
    </div>
    )
  }    
}
export default AddModule
