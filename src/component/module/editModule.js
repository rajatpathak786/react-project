import React, { Component } from 'react'
import { store } from '../../store'
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import axios from 'axios';
//import FormControl from '@material-ui/core/FormControl';
//import { withStyles } from '@material-ui/core/styles';
//import classNames from 'classnames';
import { taskDetails, moduleNameUpdate, appMenu } from '../../actions/employee'
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify';
import { getTaskDetails, getModuleDetailsId } from '../../selectors/selectors'

// const styles = theme => ({
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 120,
//     maxWidth: 300,
//   },
// })
let name;
class EditModule extends Component {

  state = {
    values: [],
  };

  initialFunction() {
    store.dispatch(appMenu({menu: false}))
  }

  componentWillMount () {
    this.initialFunction();
  }  

  handleChangeName(event) {
    console.log('oooooooooooooooooooooooooooooo')
    console.log(event)
    console.log(event.value)
    store.dispatch(moduleNameUpdate({name : event.value}));
  }

  handleChange (event) {
    // store.dispatch(taskAddModule({item: event.target.value}))
    // console.log('22222222222222');
    // console.dir([this.state , event.target.value])
    if(typeof this.state == "undefined") {
      this.setState({
        values: event.target.value
      })
    } else {
      this.setState({
        values: [...event.target.value]
      });
      // console.log('23232323232323232323232')
      // console.log(this.state)
    }
  } 

  getModuleDetails() {
    axios.get('http://127.0.0.9:4566/moduleFetchId/', {
      params: {
        id: this.props.match.params.moduleId
      }
    })
    .then(async(response) => {
      // console.log('response')
      // console.log(typeof response.data.result.resultResponse[0].taskId);
      // console.log(response.data.result.resultResponse[0].taskId);
      // console.log(store.getState())
      await this.setState({
        values: response.data.result.resultResponse[0].taskId
      })
      // console.log('this.state change')
      // console.log(this.state)
      await store.dispatch(moduleNameUpdate({name : response.data.result.resultResponse[0].name}))
      // console.log(store.getState())
      await axios.get('http://127.0.0.9:4566/taskDetails/')
      .then(async(response) => {
        // console.log('response')
        // console.log(typeof response.data.result.resultResponse);
        // console.log(response.data.result.resultResponse);
        // console.log(store.getState())
        store.dispatch(taskDetails({ items : response.data.result.resultResponse}));
        this.setState({items: response.data.result.resultResponse})
        // console.log('1111111')
        // console.log(store.getState())
      }).catch((error) => {
        console.log(error);
      });   
      // this.setState({items: response.data.result.resultResponse})
      // console.log('1111111')
      // console.log(store.getState())
      // console.log(store.getState().list[0].items.length)
    }).catch((error) => {
      console.log(error);
    });  
  }

  // taskList() {
  //   axios.get('http://127.0.0.9:4566/taskDetails/')
  //   .then(async(response) => {
  //     console.log('response')
  //     console.log(typeof response.data.result.resultResponse);
  //     console.log(response.data.result.resultResponse);
  //     console.log(store.getState())
  //     store.dispatch(taskDetails({ items : response.data.result.resultResponse}));
  //     this.setState({items: response.data.result.resultResponse})
  //     console.log('1111111')
  //     console.log(store.getState())
  //   }).catch((error) => {
  //     console.log(error);
  //   });  
  // }

  componentDidMount () {
    this.getModuleDetails();
  }

  updateModel(event) {
    event.preventDefault();
    if (getModuleDetailsId() === '' || !(this.state.values.length)) {
      // console.log('$$$$$$$$')
      // console.log(store.getState())
      // console.log(this.props.match.params.moduleId)
      // console.log(this.state.values)
      toast.warn('Module Name field is mandatory & and you should select one or more than one tasks');
    } else {
      // console.log('$$$$$$$$')
      // console.log(store.getState())
      // console.log(this.props.match.params.moduleId)
      // console.log(store.getState().name)
      // console.log(this.state.values)
      axios.post('http://127.0.0.9:4566/moduleUpdate/', {
        id: this.props.match.params.moduleId,
        taskId: this.state.values,
        moduleName: name
      }).then((response) => {
        // console.dir(store.getState())
        toast.success('Details inserted into Database Successfully!!!');
        // console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  
  render() {
    console.log(getTaskDetails(),getModuleDetailsId())
    const {values} = this.state;
    // console.log('322222')
    // console.log(store.getState());
    // console.log(this.state.values)
    let Details = () => {
      // console.log('2222255555444444666666')
      // console.log(store.getState());
      // console.log(this.state)
      let id = 0;
      let arr = []
      let noOfItems = 0;
      // console.log('2222222222222222222222222222')
      // console.log(store.getState()) 
      //if (!(typeof store.getState() == "undefined")) {
        if (!(typeof getTaskDetails() == "undefined")) {
          for (noOfItems; noOfItems < getTaskDetails()[0].items.length; ++noOfItems) {
            id = id + 1;
            console.log(arr)
            arr.push({id: id, taskId: getTaskDetails()[0].items[noOfItems].id, taskName: getTaskDetails()[0].items[noOfItems].taskname})
            console.log('arr')
            console.log(arr)
          }
        }
      //}
      console.log('final')
      console.log(arr)
      return arr 
    }
    console.log('2323232323232323232323232323232')
    console.log(store.getState());
    if (typeof getModuleDetailsId() == "undefined") {
      // name = store.getState().task[0].items.moduleName;
      name = '';
    } else { 
      console.log('****************')
      console.log(store.getState().taskName)
      name = getModuleDetailsId();
    }
    
    return (
      <div>
        <form id = "editEmp" onSubmit = {this.updateModel.bind(this)}>
          {/* <p>Module Name: <input type = "Text" name = "name" value = {name} onChange = {value => this.handleChangeName(value.target)}/></p> */}
          <p>
          <p>
          <TextField
            name="name"  
            value = {name}
            onChange = {value => this.handleChangeName(value.target)}
            label="Module Name"
            margin="normal"
          />
        </p>
          </p>
          <p>
            <Select
            multiple 
            value={values}
            onChange={this.handleChange.bind(this)} 
            input={<Input id="select-multiple" />} 
           >
            {Details().map((row) => (
              <MenuItem key={row.id} value = {row.taskId} >
                {row.taskName}
              </MenuItem>
            ))}
            </Select>
          </p>
          <Button variant = "contained" color = "primary" type = "Submit" style={{right:'-54px'}}>
          Submit
          </Button>
        </form> 
      </div>
    )
  }    
}

export default EditModule;